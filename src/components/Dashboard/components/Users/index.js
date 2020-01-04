import React, { useState } from 'react'
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
import UserItem from './components/UserItem'
import AddUserDialog from './components/AddUserDialog'
import EditUserDialog   from './components/EditUserDialog'
import DeleteDialog from './components/DeleteDialog'

const Users = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [userId, setUserId] = useState(0);

	const handleCreate = () => {
		setCreate(!createDialog);
	};
	const handleDelete = (id) => {
		setUserId(id);
		setDelete(!deleteDialog)
	};

	const handleEdit = (id) => {
		setUserId(id);
		setEdit(!editDialog)
	};

	const users = [
		{id: 1, firstName: 'Mark', lastName: 'Evans', email: 'mark.evans@mail.com', tasks: [{id:1}, {id:2}, {id:5}]},
		{id: 2, firstName: 'Adam', lastName: 'Tailor', email: 'adam.tailor@mail.com', tasks: [{id:4}, {id:8}]},
		{id: 3, firstName: 'Sarah', lastName: 'Rodgers', email: 'sarah.rodgers@mail.com', tasks: [{id:3}]},
		{id: 4, firstName: 'Oliver', lastName: 'Green', email: 'oliver.green@mail.com'},
		{id: 5, firstName: 'Kate', lastName: 'Adams', email: 'kate.adams@mail.com', tasks: [{id:6}, {id:7}, {id:9}, {id:10}]},
		{id: 6, firstName: 'Robin', lastName: 'Willson', email: 'robin.wilson@mail.com',  tasks: [{id:12}, {id:11}]},
		{id: 7, firstName: 'Timoti', lastName: 'Brown', email: 'timoti.brown@mail.com', tasks: [{id:13}]}
	];

	return(
		<div className='dashboard-content'>
			<AppBar title="Users">
				<AppBarBefore>
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
									<TableCell>User</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>
										Tasks
									</TableCell>
									<TableCell>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users && users.map( user => {
									return <UserItem
										key={user.id}
										user={user}
										handleDelete={() => handleDelete(user.id)}
										handleEdit={() => handleEdit(user.id)}
									/>
								})}
							</TableBody>
						</Table>
					</div>
				</Paper>
			</div>
			<AddUserDialog
				open={createDialog}
				handleClose={handleCreate}
				handleCreate={handleCreate}
			/>
			<EditUserDialog
				open={editDialog}
				handleClose={() => handleEdit(0)}
				user={users && users.find( user => user.id === userId )}
			/>
			<DeleteDialog
				open={deleteDialog}
				handleClose={() => handleDelete(0)}
				user={users && users.find( user => user.id === userId )}
			/>
		</div>
	)
};

export default Users;