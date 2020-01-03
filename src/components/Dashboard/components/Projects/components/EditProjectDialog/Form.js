import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import {Field, reduxForm} from 'redux-form'
import Input from '../../../../../common/Input'

let Form = (props) => {
	const handleChange = (e) => {
	};

	return (
		<div className="dialog-form">
			<div className="flexed-row title-row">
				<Avatar className="avatar-center">{}</Avatar>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="projectTitle"
					label="Enter Project title"
					placeholder="Please enter"
					onChange={handleChange}
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
				/>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					type='url'
				    name='projectLink'
					label="Enter Project link"
					placeholder="Please enter"
					onChange={handleChange}
				/>
			</div>
			<div className='dialog-action'>
				<Button
					color='secondary'
					variant='contained'
					onClick={() => {}}
				>Save</Button>
			</div>
		</div>
	)
};

function validate(values) {
	// const {
	// 	projectTitle,
	// 	projectLink,
	// 	projectAv
	// } = values;

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
	setFormData: PropTypes.func.isRequired
};

Form = reduxForm({
	form: 'editProject',
	enableReinitialize: true,
	validate
})(Form);

export default Form;


