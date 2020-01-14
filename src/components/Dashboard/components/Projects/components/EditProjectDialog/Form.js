import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import {Field, reduxForm} from 'redux-form'
import { useDispatch } from "react-redux"

import Input from '../../../../../common/Input'
import { editProject } from "../../../../../../store/actions";

let Form = ({ invalid, submitting, formData, setFormData, handleClose, project }) => {
	const { projectTitle, projectLink, projectAv} = formData;
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleEdit = (e) => {
		e.preventDefault();
		const _project = { ...project,  ...formData};

		dispatch(editProject(_project));
		handleClose();
	};

	return (
		<form className="dialog-form" onSubmit={handleEdit}>
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="projectTitle"
					label="Enter Project title"
					placeholder="Please enter"
					onChange={handleChange}
				    value={projectTitle}
				/>
			</div>
			<div className="flexed-row">
				<Field component={Input}
				   type="text"
				   name="projectAv"
				   label="Enter Project short form
					(1-2 letters)"
				   placeholder="Please enter"
				   onChange={handleChange}
				   value={projectAv}
				/>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					type='url'
				    name='projectLink'
					label="Enter Project link"
					placeholder="Please enter"
					onChange={handleChange}
				    value={projectLink}
				/>
			</div>
			<div className='dialog-action'>
				<Button
					color='secondary'
					variant='contained'
					type="submit"
					disabled={invalid || submitting}
				>Save</Button>
			</div>
		</form>
	)
};

function validate(values) {
	const errors = {};

	if(!values.projectTitle){
		errors.projectTitle='Project title field cannot be blank';
	}
	if(!values.projectAv){
		errors.projectAv='Project short form field cannot be blank';
	}
	if(!values.projectLink){
		errors.projectLink='Project link field cannot be blank';
	}
	else if(!isUrlValid(values.projectLink) ) {
		errors.projectLink="Insert a valid URL";
	}
	return errors;
}

const isUrlValid = (userInput) => {
	let res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	if(res == null)
		return (false );
	else
		return (true);
};

Form.propsTypes = {
	formData: PropTypes.object.isRequired,
	setFormData: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired,
	handleClose: PropTypes.func
};

Form = reduxForm({
	form: 'editProject',
	validate
})(Form);

export default Form;


