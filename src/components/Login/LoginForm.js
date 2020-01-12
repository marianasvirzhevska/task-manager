import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch } from "react-redux"
import { Field, reduxForm } from 'redux-form'
import { useHistory } from 'react-router-dom'

import { login } from '../../store/actions'
import trim from '../../utils/trim'
import setUser from '../../utils/setUser'
import Input from '../common/Input'
import useLoginForm from "./useLogin"

let LoginForm = (props) => {
	const { invalid, submitting, pristine } = props;
	const dispatch = useDispatch();
	const history = useHistory();
	const users = props.users.users;

	const getAuthUser = (users, email) => {
		return users && users.find( user => user.email === email);
	};

	const loginUser = (formData) => {
		const user = getAuthUser(users, formData.email);

		setUser(user);
		dispatch(login(user));
		history.push("/dashboard");
	};

	const { inputs, handleInput, handleSubmit } = useLoginForm(loginUser);

	return (
		<div className="form-control">
			<form className="auth-form loginForm" onSubmit={handleSubmit}>
				<Field component={Input} name="email" type="email"
					   fullWidth
					   onChange={handleInput} value={inputs.email}
					   label='Enter your Email'
				/>
				<Field component={Input} name="password" type="password"
					   fullWidth
					   label='Enter your password'
					   onChange={handleInput} value={inputs.password}

				/>
				<div className="form-btn">
					<Button
						disabled={invalid|| submitting || pristine}
						type="submit" variant="contained" color='secondary'>
						Sign me in
					</Button>
				</div>
			</form>
		</div>
	)
};

const validate = (_values, props) => {
	const users = props.users.users;
	const values = trim(_values);
	const errors = {};

	if (!values.email) {
		errors.email = 'E-mail field cannot be blank'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail is incorrect'
	} else if(!isEmailExist(values.email, users)) {
		errors.email='Email doesn\'t exist';
	}

	if (!values.password) {
		errors.password = 'Password field cannot be blank'
	} else if (values.password.length < 6) {
		errors.password = 'Password should contain at least 6 characters'
	} else if(!checkPwd(values.password, values.email, users)) {
		errors.password='Incorrect password';
	}

	return errors
};

const isEmailExist = (input, users) => {
	if (users && users.find( user => user.email === input)) {
		return (true);
	}
	return (false);
};

const checkPwd = (pass, email, users) => {
	const user = users.find( user => user.email === email);
	if (user && pass === user.password){
		return (true);
	}
	return (false);
};


LoginForm = reduxForm({
	form: 'login',
	validate
})(LoginForm);

export default LoginForm;