import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import Input from '../../../../../common/Input'
import CustomCheckbox from "../../../../../common/Checkbox"

const users = [
	{id: 1, firstName: 'Mark', lastName: 'Evans', email: 'mark.evans@mail.com'},
	{id: 2, firstName: 'Adan', lastName: 'Tailor', email: 'adam.tailor@mail.com'},
	{id: 3, firstName: 'Sarah', lastName: 'Rodgers', email: 'sarah.rodgers@mail.com'},
	{id: 4, firstName: 'Linda', lastName: 'Wilson', email: 'linda.vilson@mail.com'},
];

let Form = (props) => {
	const handleChange = () => {};

	const handleCreate = () => {};

	return (
		<div className="dialog-form">
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="firstName"
					label="User Name"
					placeholder="Please enter"
					onChange={handleChange}
				/>
			</div>
			<div className="flexed-row">
				<div className="half-column">
					<Field component={Input}
						type="text"
						name="lastName"
						label="User Surname"
					    placeholder="Please enter"
					    onChange={handleChange}
					/>
				</div>
				<div className="half-column">
					<Field component={Input}
						name="email"
						type="email"
						label="User Email"
						placeholder="Please enter"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="flexed-row">
				<Field component={CustomCheckbox} name="admin"
					   label='Administrator rights'
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

	if(!values.firstName){
		errors.firstName='User Name field cannot be blank';
	}
	if(!values.lastName){
		errors.lastName='User Surname form field cannot be blank';
	}
	if (!values.email) {
		errors.email = 'E-mail field cannot be blank'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail is incorrect'
	}
	else if (isUniqueEmail(values.email)) {
		errors.email = 'This E-mail is already taken'
	}
	return errors;
}

const isUniqueEmail = (input) => {
	if (users && users.find( user => user.email === input)) {
			return (true);
		}
	return (false);
};

Form = reduxForm({
	form: 'editUser',
	validate
})(Form);

export default Form;


