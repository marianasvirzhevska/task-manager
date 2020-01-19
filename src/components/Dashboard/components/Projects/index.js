import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux'

import ProjectItem from './components/ProjectsItem'
import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField
} from '../AppBar'
import AddProjectDialog from './components/AddProjectDialog'
import EditProjectDialog from './components/EditProjectDialog'
import DeleteDialog from './components/DeleteDialog'

const Projects = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [projectId, setProjectId] = useState(0);
	const projects = useSelector(state => state.projects.projects);
	const isAdmin = useSelector(state => state.auth.user.admin);
	const [_projects, setProjects] = useState(projects);


	const handleCreate = () => {
		setCreate(!createDialog);
	};
	const handleDelete = (id) => {
		setProjectId(id);
		setDelete(!deleteDialog)
	};

	const handleEdit = (id) => {
		setProjectId(id);
		setEdit(!editDialog)
	};

	const getSearch = (list, searchString) => {
		return list.filter(item => {
			return Object.values(item)
				.some(value => `${value}`.toLowerCase()
					.includes(searchString.toLowerCase()));
		});
	};

	const handleSearch = ({target}) => {
		setProjects(getSearch(projects, target.value));
	};

	return(
		<div className='dashboard-content'>
			<AppBar  title="Projects">
				<AppBarBefore>
					<SearchField onChange={handleSearch}/>
				</AppBarBefore>
				{isAdmin &&
					<AppBarAfter>
						<Button size='small'
								variant='contained'
								color='secondary'
								onClick={handleCreate}>
							Add Project
						</Button>
					</AppBarAfter>
				}
			</AppBar>

			<div className='paper-wrap'>
				<Paper elevation={1}>
					<div className='table-cover'>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Title</TableCell>
									<TableCell>Link</TableCell>
									<TableCell>
										Tasks
									</TableCell>
									{isAdmin && <TableCell>Actions</TableCell>}
								</TableRow>
							</TableHead>
							<TableBody>
								{_projects && _projects.map( project => {
									return <ProjectItem
												key={project.id}
												project={project}
												handleDelete={() => handleDelete(project.id)}
												handleEdit={() => handleEdit(project.id)}
											/>
								})}
							</TableBody>
						</Table>
						{
							_projects.length === 0 && <p className='no-results'>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
						}
					</div>
				</Paper>
			</div>
			<AddProjectDialog
				open={createDialog}
				handleClose={handleCreate}
				handleCreate={handleCreate}
			/>
			<EditProjectDialog
				open={editDialog}
				handleClose={() => handleEdit(0)}
				project={projects && projects.find( project => project.id === projectId )}
			/>
			<DeleteDialog
				open={deleteDialog}
				handleClose={() => handleDelete(0)}
				project={projects && projects.find( project => project.id === projectId )}
			/>
		</div>
	)
};

export default Projects;