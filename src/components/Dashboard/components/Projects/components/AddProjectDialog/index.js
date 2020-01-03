import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const AddProjectDialog = (props) => {
	const {open, handleClose, handleCreate} = props;
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
				<Form formData={formData} setFormData={setFormData}/>
				<div className='dialog-action'>
					<Button
						color='secondary'
						variant='contained'
						onClick={() => handleCreate()}
					>Save</Button>
				</div>
			</AppDialogContent>
		</AppDialog>
	)
};

AddProjectDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default AddProjectDialog;

