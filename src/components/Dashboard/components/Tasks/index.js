import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField,
	Filters
} from '../AppBar'
import Pagination from '../../../common/Pagination'

import TaskItem from './components/TaskItem'
import AddTaskDialog from './components/AddTaskDialog'
import EditTaskDialog from './components/EditTaskDialog'
import DeleteDialog from './components/DeleteDialog'
import FiltersDialog from './components/FiltersDialog'


const Tasks = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [filterDialog, setFilter] = useState(false);
	const [taskId, setTaskId] = useState(0);

	const tasks = useSelector(state => state.tasks.tasks);
	const users = useSelector(state => state.users.users);
	const projects = useSelector(state => state.projects.projects);
	const isAdmin = useSelector(state => state.auth.user.admin);

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(8);

	const useQuery = () =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	const getURLQuery = () => {
		if(!query.get('type')){
			return {};
		} else return {
			propKey: query.get('type'),
			propValue: query.get('id')
		}
	};

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [filterQuery, setFilterQuery] = useState(getURLQuery());

	useEffect(() => {
		const filtersObj = (obj) => {
			switch (obj.propKey){
				case 'Projects':
					return {
						type: 'project',
						value: obj.propValue
					};
				case 'Users':
					return {
						type: 'user',
						value: obj.propValue
					};
				case 'Task status':
					return {
						type: 'status',
						value: obj.propValue
					};
				default:
					return null
			}
		};

		const filteredList = tasks.filter(task => {
			const filterObj = filtersObj(filterQuery) || {};

			if (typeof (task[`${filterObj.type}`]) !== "object") {
				return task[`${filterObj.type}`] === filterObj.value;
			}
			return task[`${filterObj.type}`].id === filterObj.value;
		});

		const result = filteredList.filter(task => new RegExp(searchQuery, 'i').test(task.title));
		setSearchResult(result);


	}, [searchQuery, tasks, filterQuery]);

	const handleCreate = () => setCreate(!createDialog);

	const handleDelete = (id) => {
		setTaskId(id);
		setDelete(!deleteDialog)
	};

	const handleEdit = (id) => {
		setTaskId(id);
		setEdit(!editDialog)
	};

	const handleFilter = () => setFilter(!filterDialog);

	const applyFilters = (value) => {
		setFilterQuery(value);
	};

	const handleSearch = ({target}) => {
		setSearchQuery(target.value);
	};

	const clearSearch = () => setSearchQuery('');

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = ({target}) => {
		setRowsPerPage(parseInt(target.value, 10));
		setPage(0);
	};

	return(
		<div className='dashboard-content'>
			<AppBar title="Tasks">
				<AppBarBefore>
					<Filters handleFilter={handleFilter}/>
					<SearchField
						value={searchQuery}
						onChange={handleSearch}
						clearSearch={clearSearch}
					/>
				</AppBarBefore>
				{isAdmin &&
					<AppBarAfter>
						<Button size='small'
								variant='contained'
								color='secondary'
								onClick={handleCreate}>
							Create Task
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
									<TableCell>Project</TableCell>
									<TableCell>Title</TableCell>
									<TableCell className='cell-mobile'>Assign</TableCell>
									<TableCell className='cell-mobile'>Status</TableCell>
									<TableCell>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									searchResult
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map(task => {
										return <TaskItem
											key={task.id}
											task={task}
											project={projects && projects.find(item => item.id === task.project.id)}
											user={users && users.find(item => item.id === (task.user ? task.user.id : 0))}
											handleDelete={() => handleDelete(task.id)}
											handleEdit={() => handleEdit(task.id)}
										/>
									})
								}
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
			<AddTaskDialog
				open={createDialog}
				handleClose={handleCreate}
			/>
			<EditTaskDialog
				open={editDialog}
				handleClose={() => handleEdit(0)}
				task={tasks && tasks.find( task => task.id === taskId )}
			/>
			<DeleteDialog
				open={deleteDialog}
				handleClose={() => handleDelete(0)}
				task={tasks && tasks.find( task => task.id === taskId )}
			/>
			<FiltersDialog
				open={filterDialog}
				filterQuery={filterQuery}
				handleClose={handleFilter}
				handleApply={applyFilters}
			/>
		</div>
	)
};

export default Tasks;