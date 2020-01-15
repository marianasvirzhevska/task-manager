import React, {useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'

import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField,
	Filters
} from '../AppBar'
import TaskItem from './components/TaskItem'
import AddTaskDialog from './components/AddTaskDialog'
import EditTaskDialog from './components/EditTaskDialog'
import DeleteDialog from './components/DeleteDialog'

const Tasks = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [taskId, setTaskId] = useState(0);
	const tasks = useSelector(state => state.tasks.tasks);
	const users = useSelector(state => state.users.users);
	const projects = useSelector(state => state.projects.projects);
	const isAdmin = useSelector(state => state.auth.user.admin);

	const handleCreate = () => {
		setCreate(!createDialog);
	};
	const handleDelete = (id) => {
		setTaskId(id);
		setDelete(!deleteDialog)
	};

	const handleEdit = (id) => {
		setTaskId(id);
		setEdit(!editDialog)
	};

	return(
		<div className='dashboard-content'>
			<AppBar title="Tasks">
				<AppBarBefore>
					<Filters handleFilter={() => {}}/>
					<SearchField/>
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
									<TableCell>#</TableCell>
									<TableCell>Project</TableCell>
									<TableCell>Title</TableCell>
									<TableCell>Assign</TableCell>
									<TableCell>Status</TableCell>
									{isAdmin && <TableCell>Actions</TableCell>}
								</TableRow>
							</TableHead>
							<TableBody>
								{tasks && tasks.map( task => {
									return <TaskItem
										key={task.id}
										task={task}
										project={projects && projects.find(item => item.id === task.project.id)}
										user={users && users.find(item => item.id === (task.user ? task.user.id : 0))}
										handleDelete={() => handleDelete(task.id)}
										handleEdit={() => handleEdit(task.id)}
									/>
								})}
							</TableBody>
						</Table>
					</div>
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
		</div>
	)
};

export default Tasks;