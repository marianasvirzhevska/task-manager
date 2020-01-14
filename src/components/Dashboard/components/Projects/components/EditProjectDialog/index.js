import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const EditProjectDialog = (props) => {
	const {open, handleClose, project} = props;
	const [formData, setFormData] = useState({});

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
				<Form
					project={project}
					formData={formData}
					setFormData={setFormData}
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

