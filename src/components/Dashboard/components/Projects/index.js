import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField
} from '../AppBar'
import Pagination from '../../../common/Pagination'

import AddProjectDialog from './components/AddProjectDialog'
import EditProjectDialog from './components/EditProjectDialog'
import DeleteDialog from './components/DeleteDialog'
import ProjectItem from './components/ProjectsItem'

const Projects = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [projectId, setProjectId] = useState(0);

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(8);

	const projects = useSelector(state => state.projects.projects);
	const isAdmin = useSelector(state => state.auth.user.admin);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		const result = projects.filter(project => new RegExp(searchQuery, 'i').test(project.projectTitle));
		setSearchResult(result);
	}, [searchQuery, projects]);

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

	const handleSearch = ({target}) => {
		setSearchQuery(target.value);
	};

	const clearSearch = () => {
		setSearchQuery('');
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = ({target}) => {
		setRowsPerPage(parseInt(target.value, 10));
		setPage(0);
	};


	return(
		<div className='dashboard-content'>
			<AppBar  title="Projects">
				<AppBarBefore>
					<SearchField
						value={searchQuery}
						onChange={handleSearch}
						clearSearch={clearSearch}/>
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
								{
									searchResult
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map( project => {
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
							searchResult.length
								? null
								: (
									<p className='no-results'>
										Sorry, but nothing matched your search terms. Please try again with some different keywords.
									</p>
								)
						}
					</div>
					<Pagination
						count={searchResult.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
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