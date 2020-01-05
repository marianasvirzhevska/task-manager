import React from 'react'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const EditUserDialog = (props) => {
	const { open, handleClose, user } = props;
	const initialValues = {
		firstName: user && user.firstName,
		lastName: user && user.lastName,
		email: user && user.email,
		id: user && user.id
	};

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Edit User'/>
			<AppDialogContent>
				<Form user={user} initialValues={initialValues}/>
			</AppDialogContent>
		</AppDialog>
	)
};

EditUserDialog.propTypes = {
	user: PropTypes.object,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default EditUserDialog;

