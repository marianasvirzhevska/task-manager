import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const AddProjectDialog = (props) => {
	const {open, handleClose} = props;
	const projects = useSelector(state => state.projects.projects);
	const [formData, setFormData] = useState({
		projectTitle: '',
		projectAv: '',
		projectLink: ''
	});

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='Create new project'/>
			<AppDialogContent>
				<Form formData={formData}
					  projects={projects}
					  setFormData={setFormData}
					  handleClose={handleClose}/>
			</AppDialogContent>
		</AppDialog>
	)
};

AddProjectDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default AddProjectDialog;

