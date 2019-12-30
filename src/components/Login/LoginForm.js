import React from 'react'
import Button from '@material-ui/core/Button'
import CustomInput from '../common/Input'

const LoginForm = () => {
	const handleInput = (e) => {
		// TODO Add input handlers
	};

	const handleSubmit = () => {
		// TODO Add Form handlers
 	};

	return (
		<div className="form-control">
			<form className="auth-form loginForm">
				<CustomInput
					type='text'
					name='email'
					onChange={handleInput}
					label='Enter your Email'
				/>
				<CustomInput
					type='password'
					name='password'
					onChange={handleInput}
					label='Enter your password'
				/>
			</form>
			<Button
				type="submit" variant="contained" color='secondary'
				onClick={handleSubmit}>
				Sign me in
			</Button>
		</div>

	)
};

export default LoginForm;