import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const AddUserDialog = (props) => {
	const { open, handleClose } = props;
	const users = useSelector(state => state.users.users);

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Add new User'/>
			<AppDialogContent>
				<Form
					users={users}
					handleClose={handleClose}
				/>
			</AppDialogContent>
		</AppDialog>
	)
};

AddUserDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default AddUserDialog;

