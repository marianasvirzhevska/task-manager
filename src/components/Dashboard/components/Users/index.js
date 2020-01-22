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

import UserItem from './components/UserItem'
import AddUserDialog from './components/AddUserDialog'
import EditUserDialog   from './components/EditUserDialog'
import DeleteDialog from './components/DeleteDialog'
import UserDetails from './components/UserDetails'

const Users = () => {
	const [createDialog, setCreate] = useState(false);
	const [deleteDialog, setDelete] = useState(false);
	const [editDialog, setEdit] = useState(false);
	const [detailsDialog, setDetails] = useState(false);
	const [userId, setUserId] = useState(0);

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(8);

	const users = useSelector(state => state.users.users);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		const reg = new RegExp(searchQuery, 'i');
		const result = users.filter(user => {
			return reg.test(user.firstName) || reg.test(user.lastName) || reg.test(user.email)
		});
		setSearchResult(result);
	}, [searchQuery, users]);


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

	const handleSearch = ({target}) => {
		setSearchQuery(target.value);
	};

	const clearSearch = () => {
		setSearchQuery('');
	};

	const viewDetails = (id) => {
		setUserId(id);
		setDetails(!detailsDialog);
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
			<AppBar title="Users">
				<AppBarBefore>
					<SearchField
						value={searchQuery}
						onChange={handleSearch}
						clearSearch={clearSearch}
					/>
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
								{
									searchResult
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map( user => {
										return <UserItem
											key={user.id}
											user={user}
											handleDelete={() => handleDelete(user.id)}
											handleEdit={() => handleEdit(user.id)}
											handleView={() => viewDetails(user.id)}
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
			<UserDetails
				open={detailsDialog}
				handleClose={() => viewDetails(0)}
				user={users && users.find( user => user.id === userId )}
			/>
		</div>
	)
};

export default Users;