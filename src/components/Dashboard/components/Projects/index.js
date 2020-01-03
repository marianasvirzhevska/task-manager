import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

	const projects = [
		 {
			id: 1,
		 	projectTitle: 'Travel Team',
		    projectAv: 'TT',
		 	projectLink: 'https://material-ui.com',
			tasks: 12,
			},
		 {
			id: 2,
		 	projectTitle: 'Ori Game',
		 	projectAv: 'OG',
		 	projectLink: 'https://material-ui.com',
			tasks: 9,
		},
		{
			id: 3,
		 	projectTitle: 'Info Viewer',
		 	projectAv: 'IW',
			projectLink: 'https://material-ui.com',
			tasks: 32,
		},
		{
			id: 4,
		 	projectTitle: 'Random Name',
		 	projectAv: 'RN',
			projectLink: 'https://react-redux.js.org/next/api/hooks',
			tasks: 32,
		}
	];

	return(
		<div className='dashboard-content'>
			<AppBar  title="Projects">
				<AppBarBefore>
					<SearchField/>
				</AppBarBefore>
				<AppBarAfter>
					<Button size='small'
							variant='contained'
							color='secondary'
							onClick={handleCreate}>
						Add Project
					</Button>
				</AppBarAfter>
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
									<TableCell>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{projects && projects.map( project => {
									return <ProjectItem
										key={project.id}
										id={project.id}
										title={project.projectTitle}
									 	projectAv={project.projectAv}
										link={project.projectLink}
										tasks={project.tasks}
										handleDelete={() => handleDelete(project.id)}
										handleEdit={() => handleEdit(project.id)}
									/>
								})}
							</TableBody>
						</Table>
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