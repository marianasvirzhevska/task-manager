import React, {Component} from 'react'
import CustomInput from '../common/Input'
import Button from '../common/Button'

class LoginForm extends Component{
	state = {
		email: '',
		password: ''
	};

	handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

	};

	render() {
		const {handleInput, handleSubmit} = this;
		const {email, password} = this.state;

		return (

			<div className="form-control">
				<form className="auth-form loginForm">
					<CustomInput
						type='text'
						name='email'
						value={email}
						onChange={handleInput}
						label='Enter your Email'
					/>
					<CustomInput
						type='password'
						name='password'
						value={password}
						onChange={handleInput}
						label='Enter your password'
					/>
				</form>
				<Button
					type='contained'
					color='primary'
					handler={handleSubmit}>
					Sign me in
				</Button>
			</div>

		)
	}
}

export default LoginForm;