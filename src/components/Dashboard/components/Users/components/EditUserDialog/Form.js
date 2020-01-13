import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import { useDispatch } from "react-redux"
import Input from '../../../../../common/Input'
import CustomCheckbox from "../../../../../common/Checkbox"
import trim from "../../../../../../utils/trim";
import {editUser} from '../../../../../../store/actions'

let Form = (props) => {
	const { invalid, submitting, formData, setFormData, handleClose, user } = props;
	const { firstName, lastName, email, admin } = formData;
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
		const _user = { ...user,  ...formData};

		dispatch(editUser(_user));
		handleClose();
	};

	return (
		<form className="dialog-form" onSubmit={handleCreate}>
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="firstName"
					label="User Name"
					placeholder="Please enter"
					onChange={handleChange}
				    value={firstName}
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
					    value={lastName}
					/>
				</div>
				<div className="half-column">
					<Field component={Input}
						name="email"
						type="email"
						label="User Email"
						placeholder="Please enter"
						onChange={handleChange}
					    value={email}
					/>
				</div>
			</div>
			<div className="flexed-row">
				<Field component={CustomCheckbox} name="admin"
					   value={admin}
					   label='Administrator rights'
				/>
			</div>
			<div className='dialog-action'>
				<Button
					color='secondary'
					variant='contained'
					type="submit"
					disabled={invalid|| submitting}
				>Save</Button>
			</div>
		</form>
	)
};

function validate(_values) {
	const values = trim(_values);
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
	return errors;
}

Form = reduxForm({
	form: 'editUser',
	validate
})(Form);

export default Form;


