import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { connect, useSelector, useDispatch } from 'react-redux'

import Input from '../../../../../common/Input'
import { editProject } from "../../../../../../store/actions";

let Form = ({ invalid, submitting, handleClose, project }) => {
	const dispatch = useDispatch();
	const formValues = useSelector(state => getFormValues('editProject')(state));

	const handleEdit = (e) => {
		e.preventDefault();
		const _project = { ...project,  ...formValues};

		dispatch(editProject(_project));
		handleClose();
	};

	return (
		<form className="dialog-form" onSubmit={handleEdit}>
			<div className="flexed-row title-row project-title">
				<Avatar className="avatar-center">{formValues.projectAv ? formValues.projectAv : null}</Avatar>
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
				   label="Enter Project short form (1-2 letters)"
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
	let res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
	if(res == null)
		return (false );
	else
		return (true);
};

Form.propsTypes = {
	project: PropTypes.object.isRequired,
	handleClose: PropTypes.func
};

Form = reduxForm({
	form: 'editProject',
	validate
})(Form);

export default connect(state => ({
	values: getFormValues("editProject")(state)
}))(Form);


