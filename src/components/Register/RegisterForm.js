import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { onRegister } from '../../store/actions'
import setUser from '../../utils/setUser'
import CustomInput from '../common/Input'
import Button from '../common/Button'
import CustomCheckbox from '../common/Checkbox'

class RegisterForm extends Component{
	state = {
		email: '',
		firstName: '',
		lastName: '',
		companyName: '',
		password: '',
		repeatPass: ''
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
		console.log(this.state);
		setUser(this.state);
	};

	render() {
		const {handleInput, handleSubmit} = this;
		const {email, companyName, lastName, firstName, password, repeatPass} = this.state;

		return (
			<div className="form-control">
				<form className="auth-form register">
					<CustomInput
						type='text'
						name='companyName'
						value={companyName}
						onChange={handleInput}
						label='Company name'
					/>
					<CustomInput
						type='text'
						name='email'
						value={email}
						onChange={handleInput}
						label='Email'
					/>
					<div className="form-row">
						<CustomInput
							type='text'
							name='firstName'
							value={firstName}
							onChange={handleInput}
							label='First name'
						/>
						<CustomInput
							type='text'
							name='lastName'
							value={lastName}
							onChange={handleInput}
							label='Last name'
						/>
					</div>
					<div className="form-row">
						<CustomInput
							type='password'
							name='password'
							value={password}
							onChange={handleInput}
							label='Password'
						/>
						<CustomInput
							type='password'
							name='repeatPass'
							value={repeatPass}
							onChange={handleInput}
							label='Repeat password'
						/>
					</div>
					<CustomCheckbox
						label={<span>I agree to the <Link to='/terms'>Terms and Conditions</Link></span>}
						/>
					<div className="form-btn">
						<Button
							type='contained'
							color='primary'
							handler={handleSubmit}>
							Register
						</Button>
					</div>
				</form>
			</div>

		)
	}
}


const mapDispatchToProps = ( dispatch ) => ({
	registerAmd: ( user ) => {
		dispatch( onRegister(user) );
	}
});

export default connect(null, mapDispatchToProps)(RegisterForm);