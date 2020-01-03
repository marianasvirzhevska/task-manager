import React, {useState} from 'react'
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
import TaskItem from './components/TaskItem'
import AddTaskDialog from './components/AddTaskDialog'
import EditTaskDialog from './components/EditTaskDialog'
import DeleteDialog from './components/DeleteDialog'

const Tasks = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [taskId, setTaskId] = useState(0);

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

	const tasks = [
		{
			id: 1,
			title: 'Create layout',
			description: 'Develop markup according to the customer design',
			status: 'Pending',
			project: {id: 1, projectTitle: 'Travel Team', projectAv: 'TT'},
			user: {id: 1, firstName: 'Mark', lastName: 'Evans', email: 'mark.evans@mail.com'}
		},
		{
			id: 2,
			title: 'Add Form validation',
			description: 'Add required and optional fields',
			status: 'InProgress',
			project: {id: 1, projectTitle: 'Travel Team', projectAv: 'TT'}
		},
		{
			id: 3,
			title: 'Add Filters to main dashboard',
			description: 'Add required and optional fields',
			status: 'Done',
			project: {id: 1, projectTitle: 'Travel Team', projectAv: 'TT'},
			user: {id: 2, firstName: 'Adan', lastName: 'Tailor', email: 'adam.tailor@mail.com'}
		},
		{
			id: 4,
			title: 'Create layout',
			description: 'Develop markup according to the customer design',
			status: 'Pending',
			project: {id: 1, projectTitle: 'Travel Team', projectAv: 'TT'},
			user: {id: 3, firstName: 'Sarah', lastName: 'Rodgers', email: 'sarah.rodgers@mail.com'}
		},
	];

	return(
		<div className='dashboard-content'>
			<AppBar title="Tasks">
				<AppBarBefore>
					<Filters handleFilter={() => {}}/>
					<SearchField/>
				</AppBarBefore>
				<AppBarAfter>
					<Button size='small'
							variant='contained'
							color='secondary'
							onClick={handleCreate}>
						Create Task
					</Button>
				</AppBarAfter>
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
									<TableCell>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{tasks && tasks.map( task => {
									return <TaskItem
										key={task.id}
										task={task}
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