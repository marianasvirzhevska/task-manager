import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const AddTaskDialog = (props) => {
	const { open, handleClose } = props;
	const [formData, setFormData] = useState({
		title: '',
		project: '',
		user: '',
		description: ''
	});

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Add New Task'/>
			<AppDialogContent>
				<Form formData={formData} setFormData={setFormData}/>
			</AppDialogContent>
		</AppDialog>
	)
};

AddTaskDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default AddTaskDialog;

