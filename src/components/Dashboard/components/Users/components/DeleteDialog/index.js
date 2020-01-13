import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { useDispatch } from "react-redux"

import { deleteUser } from "../../../../../../store/actions";
import { AppDialog } from '../../../../../common/Dialog'
import deleteIcon from '../../../../../../assets/icons/ico-trash.svg'

const DeleteDialog = (props) => {
	const { open, handleClose, user } = props;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteUser(user));
		handleClose();
	};

	return(
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<div className='delete-container'>
				<img src={deleteIcon} alt=""/>
				<h3 className='delete-title'>Delete User</h3>
				<div className='user-info'>
					<div className='task-details'>
						<p className='name'>{user && user.firstName} {user && user.lastName}</p>
						<p className='email'>{user && user.email}</p>
					</div>
				</div>
				<Button
					variant='contained'
					onClick={handleDelete}
					className='delete-button'
				>Delete</Button>
				<Button
					onClick={handleClose}
					className='cancel-button'
				>Cancel</Button>
			</div>
		</AppDialog>
	)
};

DeleteDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	user: PropTypes.object
};

export default DeleteDialog;

