import React from 'react'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const EditProjectDialog = (props) => {
	const {open, handleClose, project} = props;

	const initialValues = {
		projectTitle: project && project.projectTitle,
		projectAv: project && project.projectAv,
		projectLink: project && project.projectLink
	};

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Edit project'/>
			<AppDialogContent>
				<Form project={project}
					handleClose={handleClose}
					initialValues={initialValues}
				/>
			</AppDialogContent>
		</AppDialog>
	)
};

EditProjectDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	project: PropTypes.object
};

export default EditProjectDialog;

