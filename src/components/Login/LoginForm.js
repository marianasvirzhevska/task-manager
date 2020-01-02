import React from 'react'
import Button from '@material-ui/core/Button'
// import { useDispatch, useSelector } from "react-redux"
import {Field, reduxForm} from 'redux-form'
// import { onLogin } from '../../store/actions'
import setUser from '../../utils/setUser'
import Input from '../common/Input'
import useLoginForm from "./useLogin"

let LoginForm = (props) => {
	const { invalid, submitting, pristine } = props;
	const login = () => {
		setUser(inputs);
	};

	const { inputs, handleInput, handleSubmit } = useLoginForm(login);

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

const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'E-mail field cannot be blank'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail is incorrect'
	}
	if (!values.password) {
		errors.password = 'Password field cannot be blank'
	} else if (values.password.length < 6) {
		errors.password = 'Password should contain at least 6 characters'
	}
	return errors
};

LoginForm = reduxForm({
	// a unique name for the form
	form: 'login',
	validate
})(LoginForm);

export default LoginForm;