import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { AppDialog, AppDialogTitle, AppDialogContent } from '../../../../../common/Dialog'
import Form from './Form'

const AddUserDialog = (props) => {
	const { open, handleClose } = props;
	const users = useSelector(state => state.users.users);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		admin: false,
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
				<Form
					users={users}
					formData={formData}
					setFormData={setFormData}
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

