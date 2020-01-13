import React from 'react'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const EditTaskDialog = (props) => {
	const {open, handleClose, task} = props;
	const initialValues = {
		title: task && task.title,
		project: task && task.project.projectTitle,
		// user: task && (firstName + ' ' + lastName),
		description: task && task.description
	};

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Create new project'/>
			<AppDialogContent>
				<Form task={task}
					  handleClose={handleClose}
					  initialValues={initialValues}
				/>
			</AppDialogContent>
		</AppDialog>
	)
};

EditTaskDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	task: PropTypes.object
};

export default EditTaskDialog;

