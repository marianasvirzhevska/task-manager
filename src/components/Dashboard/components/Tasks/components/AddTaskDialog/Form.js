import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import Input from '../../../../../common/Input'
import SelectField from '../../../../../common/SelectField'

let Form = (props) => {
	const handleChange = (e) => {
	};

	const handleCreate = () => {
	};

	const projects = ['Travel Team', "Ori Game", "Info Viewer", "Random Name"];
	const users = [
		{id: 1, firstName: 'Mark', lastName: 'Evans', email: 'mark.evans@mail.com'},
		{id: 2, firstName: 'Adan', lastName: 'Tailor', email: 'adam.tailor@mail.com'},
		{id: 3, firstName: 'Sarah', lastName: 'Rodgers', email: 'sarah.rodgers@mail.com'},
		{id: 4, firstName: 'Linda', lastName: 'Wilson', email: 'linda.vilson@mail.com'},
	];

	let usersOptions = users.map(user => `${user.firstName} ${user.lastName}`);

	return (
		<div className="dialog-form">
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="title"
					label="Enter Task title"
					placeholder="Please enter"
					onChange={handleChange}
				/>
			</div>
			<div className="flexed-row">
				<div className="half-column">
					<Field
						name="project"
						component={SelectField}
						fullWidth
						label="Select project"
						items={projects}
					/>
				</div>
				<div className="half-column">
					<Field
						name="user"
						component={SelectField}
						fullWidth
						label="Assign to User"
						items={usersOptions}
					/>
				</div>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					   multiLine
					   rows='4'
					   name="description"
					   label="Enter Task description"
					   placeholder="Please enter"
					   onChange={handleChange}
				/>
			</div>
			<div className='dialog-action'>
				<Button
					color='secondary'
					variant='contained'
					onClick={() => handleCreate()}
				>Save</Button>
			</div>
		</div>
	)
};

function validate(values) {
	const errors = {};

	if(!values.title){
		errors.title='Task title field cannot be blank';
	}
	if(!values.project){
		errors.project='Project short form field cannot be blank';
	}
	if(!values.description){
		errors.description='Please select project';
	}
	return errors;
}

Form = reduxForm({
	form: 'addTask',
	validate
})(Form);

export default Form;


