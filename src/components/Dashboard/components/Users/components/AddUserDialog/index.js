import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const AddUserDialog = (props) => {
	const { open, handleClose } = props;
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		admin: '',
		id: ''
	});

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Add new User'/>
			<AppDialogContent>
				<Form formData={formData} setFormData={setFormData}/>
			</AppDialogContent>
		</AppDialog>
	)
};

AddUserDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default AddUserDialog;

