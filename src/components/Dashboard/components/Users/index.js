import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux'

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
	const users = useSelector(state => state.users.users);

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
						Add User
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