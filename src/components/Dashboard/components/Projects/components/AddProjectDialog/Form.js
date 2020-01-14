import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import { useDispatch } from "react-redux"

import { addProject } from '../../../../../../store/actions'
import trim from "../../../../../../utils/trim"
import Input from '../../../../../common/Input'

let Form = (props) => {
	const { invalid, submitting, pristine, setFormData, formData, handleClose, projects } = props;
	const { projectTitle, projectAv, projectLink } = formData;
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleCreate = (e) => {
		e.preventDefault();
		let project = {...formData};
		project.id = projects.length + 2;

		dispatch(addProject(project));
		handleClose();
	};

	return (
		<form className="dialog-form" onSubmit={handleCreate}>
			<div className="flexed-row title-row project-title">
				<Avatar className="avatar-center">{formData.projectAv ? formData.projectAv : null}</Avatar>
				<span>Short view of Project title</span>
			</div>
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
					disabled={invalid|| submitting || pristine}
				>Save</Button>
			</div>
		</form>
	)
};

function validate(_values, props) {
	const projects = props.projects;
	const values = trim(_values);
	const errors = {};

	if(!values.projectTitle){
		errors.projectTitle='Project title field cannot be blank';
	} else if(isUniqueName(values.projectTitle, projects)) {
		errors.projectTitle="Duplicate Project";
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

const isUniqueName = (input, projects) => {
	if (projects && projects.find( project => project.projectTitle === input)) {
		return (true);
	}
	return (false);
};

Form.propsTypes = {
	setFormData: PropTypes.func.isRequired
};

Form = reduxForm({
	form: 'addProject',
	validate
})(Form);

export default Form;


