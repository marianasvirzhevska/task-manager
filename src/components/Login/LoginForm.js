import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { login, editUser } from '../../store/actions'
import trim from '../../utils/trim'
import setUser from '../../utils/setUser'
import Input from '../common/Input'

let LoginForm = (props) => {
	const { invalid, submitting, pristine } = props;
	const dispatch = useDispatch();
	const history = useHistory();

	const users = props.users.users;
	const formValues = useSelector(state => getFormValues('login')(state));

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = users && users.find( user => user.email === formValues.email);

		setUser(user);
		dispatch(login(user));

		if(newUser){
			user.password = formValues.password;
			dispatch(editUser(user));
		}

		history.push("/dashboard");
	};

	const isNewUser = () => {
		if(formValues) {
			const user = users && users.find(user => user.email === formValues.email);
			if (user && !user.password) {
				return user;
			}
		}
	};

	const newUser = isNewUser();

	return (
		<div className="form-control">
			{
				newUser ?
					<h3 className='form-subtitle'>
						Hi, <span>{isNewUser().firstName}</span>, to get access to your account,<br/>
						please create your password.</h3>
					: null
			}
			<form className="auth-form loginForm" onSubmit={handleSubmit}>
				<Field component={Input}
					   name="email"
					   type="email"
					   fullWidth
					   onChange={isNewUser}
					   label='Enter your Email'
				/>
				<Field component={Input}
					   name="password"
					   type="password"
					   fullWidth
					   label='Enter password'
				/>
				{
					newUser ?
						<Field component={Input}
							   name="passwordConfirm"
							   type="password"
							   fullWidth
							   label='Repeat password'
						/>
						: null
				}
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
	}

	if (isNewUser(values,users)){
		if (!values.passwordConfirm) {
			errors.passwordConfirm = 'Confirm your password'
		} else if (values.passwordConfirm.length < 6) {
			errors.passwordConfirm = 'Confirm your password correctly'
		}

		if (values.passwordConfirm && values.password && values.passwordConfirm !== values.password) {
			errors.passwordConfirm = 'Confirm your password correctly'
		}
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

const isNewUser = (values, users) => {
	if(values) {
		const user = users && users.find(user => user.email === values.email);
		if (user && !user.password) {
			return true;
		}
	}
};

LoginForm = reduxForm({
	form: 'login',
	validate
})(LoginForm);

export default connect(state => ({
	values: getFormValues("login")(state)
}))(LoginForm);