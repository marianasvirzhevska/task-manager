import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { connect, useSelector, useDispatch } from 'react-redux'

import { addProject } from '../../../../../../store/actions'
import trim from "../../../../../../utils/trim"
import Input from '../../../../../common/Input'

let Form = ({ invalid, submitting, pristine, handleClose, projects }) => {
	const dispatch = useDispatch();
	const formValues = useSelector(state => getFormValues('addProject')(state));

	const handleCreate = (e) => {
		e.preventDefault();
		let project = {...formValues};
		project.id = projects.length + 2;
		project.tasks = [];

		dispatch(addProject(project));
		handleClose();
	};

	return (
		<form className="dialog-form" onSubmit={handleCreate}>
			<div className="flexed-row title-row project-title">
				<Avatar className="avatar-center">{formValues ? formValues.projectAv : null}</Avatar>
				<span>Short view of Project title</span>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="projectTitle"
					label="Enter Project title"
					placeholder="Please enter"
				/>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					   type="text"
					   name="projectAv"
					   label="Enter Project short form
					    (1-2 letters)"
					   placeholder="Please enter"
				/>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					type='url'
				    name='projectLink'
					label="Enter Project link"
					placeholder="Please enter"
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
	let res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
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
	handleClose: PropTypes.func.isRequired,
	projects: PropTypes.array,
};

Form = reduxForm({
	form: 'addProject',
	validate
})(Form);


export default connect(state => ({
	values: getFormValues("addProject")(state)
}))(Form);


