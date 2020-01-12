import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import setUser from '../../utils/setUser'
import trim from '../../utils/trim'
import useRegisterForm from './useRegister'
import Input from '../common/Input'
import CustomCheckbox from '../common/Checkbox'
import { registerUser } from "../../store/actions";

let RegisterForm = (props) => {
	const { invalid, submitting, pristine } = props;
	const dispatch = useDispatch();
	const history = useHistory();
	const users = props.users.users;

	const getUniqueID = (users) => {
		const getRandom = (min, max) =>{
			return Math.ceil(Math.random() * (max - min) + min);
		};

		function generateId(){
			let id = getRandom(0, users.length + 1);
			if (users && users.find( user => user.id === id)){
				id = generateId();
			} else return id;
		}

		let id = generateId();
		return (id);
	};

	const register = (formData) => {
		let user = { ...formData };
		user.id = getUniqueID(users);

		setUser(user);
		dispatch(registerUser(user));
		history.push("/dashboard");
	};

	const { inputs, handleInput, handleSubmit } = useRegisterForm(register);

	return (
		<div className="form-control">
			<form className="auth-form register" onSubmit={handleSubmit}>
				<Field component={Input} name="companyName" fullWidth
					   type="text"
					   placeholder='Company name'
					   onChange={handleInput} value={inputs.companyName}
				/>
				<Field component={Input} name="email" fullWidth
					   type="email"
					   placeholder='Email'
					   onChange={handleInput} value={inputs.email}
				/>
				<div className="form-row">
					<Field component={Input} name="firstName" fullWidth
						   type="text"
						   placeholder='First name'
						   onChange={handleInput} value={inputs.firstName}
					/>
					<Field component={Input} name="lastName" fullWidth
						   type="text"
						   placeholder='Last name'
						   onChange={handleInput} value={inputs.lastName}
					/>
				</div>
				<div className="form-row">
					<Field component={Input} name="password" fullWidth
						   type="password"
						   placeholder='Password'
						   onChange={handleInput} value={inputs.password}
					/>
					<Field component={Input} name="passwordConfirm" fullWidth
						   type='password'
						   placeholder='Repeat password'
						   onChange={handleInput} value={inputs.passwordConfirm}
					/>
				</div>
				<Field component={CustomCheckbox} name="terms"
					   label={<span>I agree to the <Link to='/terms'>Terms and Conditions</Link></span>}
				/>
				<div className="form-btn">
					<Button
						disabled={invalid|| submitting || pristine}
						type="submit" variant="contained" color='secondary'>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
};

const validate = (_values, props) => {
	const users = props.users;
	const values = trim(_values);
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
	} else if(isUniqueEmail(values.email, users.users)) {
		errors.email='Email is already taken';
	}

	if (!values.terms) {
		errors.terms = 'Accept the Terms and Conditions'
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

const isUniqueEmail = (input, users) => {
	if (users && users.find( user => user.email === input)) {
		return (true);
	}
	return (false);
};

RegisterForm = reduxForm({
	form: 'register',
	validate
})(RegisterForm);


export default RegisterForm;