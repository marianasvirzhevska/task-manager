import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// import { onRegister } from '../../store/actions'
// import setUser from '../../utils/setUser'
import Input from '../common/Input'
import CustomCheckbox from '../common/Checkbox'

let RegisterForm = () => {
	const handleSubmit = (values) => {
	};

	return (
		<div className="form-control">
			<form className="auth-form register" onSubmit={handleSubmit}>
				<Field component={Input} name="companyName" fullWidth
					   type="text"
					   placeholder='Company name'
				/>
				<Field component={Input} name="email" fullWidth
					   type="email"
					   placeholder='Email'
				/>
				<div className="form-row">
					<Field component={Input} name="firstName" fullWidth
						   type="text"
						   placeholder='First name'
					/>
					<Field component={Input} name="lastName" fullWidth
						   type="text"
						   placeholder='Last name'
					/>
				</div>
				<div className="form-row">
					<Field component={Input} name="password" fullWidth
						   type="password"
						   placeholder='Password'
					/>
					<Field component={Input} name="passwordConfirm" fullWidth
						   type='password'
						   placeholder='Repeat password'
					/>
				</div>

				<CustomCheckbox
					label={<span>I agree to the <Link to='/terms'>Terms and Conditions</Link></span>}
					/>
				<div className="form-btn">
					<Button
						type="submit" variant="contained" color='secondary'>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
};

const validate = (values) => {
	// const values = _values.trim();
	const errors = {};

	if (!values.companyName) {
		errors.companyName = 'Company name field cannot be blank'
	}

	if (!values.firstName) {
		errors.firstName = 'First Name field cannot be blank'
	}

	if (!values.lastName) {
		errors.lastName = 'Last Name field cannot be blank'
	}
	if (!values.email) {
		errors.email = 'E-mail field cannot be blank'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail is incorrect'
	}

	if (!values.terms) {
		errors.terms = true
	}

	if (!values.password) {
		errors.password = 'Password field cannot be blank'
	} else if (values.password.length < 6) {
		errors.password = 'Password should contain at least 6 characters'
	}

	if (!values.passwordConfirm) {
		errors.passwordConfirm = 'Confirm your password correctly'
	} else if (values.passwordConfirm.length < 6) {
		errors.passwordConfirm = 'Confirm your password correctly'
	}

	if (values.passwordConfirm && values.password && values.passwordConfirm !== values.password) {
		errors.passwordConfirm = 'Confirm your password correctly'
	}
	return errors
};

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'register',
	validate
})(RegisterForm);

export default RegisterForm;