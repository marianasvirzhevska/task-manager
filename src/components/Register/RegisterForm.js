import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { onRegister } from '../../store/actions'
// import setUser from '../../utils/setUser'
import CustomInput from '../common/Input'
import CustomCheckbox from '../common/Checkbox'

const RegisterForm = () => {

	const handleInput = (e) => {
	};

	const handleSubmit = (e) => {
	};

	return (
		<div className="form-control">
			<form className="auth-form register">
				<CustomInput
					type='text'
					name='companyName'
					onChange={handleInput}
					label='Company name'
				/>
				<CustomInput
					type='text'
					name='email'
					onChange={handleInput}
					label='Email'
				/>
				<div className="form-row">
					<CustomInput
						type='text'
						name='firstName'
						onChange={handleInput}
						label='First name'
					/>
					<CustomInput
						type='text'
						name='lastName'
						onChange={handleInput}
						label='Last name'
					/>
				</div>
				<div className="form-row">
					<CustomInput
						type='password'
						name='password'
						onChange={handleInput}
						label='Password'
					/>
					<CustomInput
						type='password'
						name='repeatPass'
						onChange={handleInput}
						label='Repeat password'
					/>
				</div>
				<CustomCheckbox
					label={<span>I agree to the <Link to='/terms'>Terms and Conditions</Link></span>}
					/>
				<div className="form-btn">
					<Button
						type="submit" variant="contained" color='secondary'
						onClick={handleSubmit}>
						Register
					</Button>
				</div>
			</form>
		</div>

	)
};


const mapDispatchToProps = ( dispatch ) => ({
	registerAmd: ( user ) => {
		dispatch( onRegister(user) );
	}
});

export default connect(null, mapDispatchToProps)(RegisterForm);