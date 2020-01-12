import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../../assets/images/logo.svg'
import RegisterForm from './RegisterForm'

const Register = () => {
	const users = useSelector(state => state.users);

	return (
		<div className="auth-root">
			<div className="auth-image registerImg">
				<div className="logo">
					<img src={logo} alt="logo"/>
				</div>
				<div className="bottom-row">
					<p>Copyright © 2020 Task Manage Software Tools</p>
					<Link to='/'>Terms and conditions</Link>
				</div>
			</div>
			<div className="form-cover registerForm">
				<h1 className="form-title">Registration</h1>
				<RegisterForm users={users}/>
				<p className="reset-link">Have an account?
					<Link to='/login'>Sign in</Link>
				</p>
			</div>
		</div>
	)
};

export default Register;
