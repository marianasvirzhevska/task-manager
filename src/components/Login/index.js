import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import LoginForm from './LoginForm'


const Login = () => {
	const users = useSelector(state => state.users);

	return (
		<div className="auth-root">
			<div className="auth-image loginImg">
				<div className="logo">
					<img src={logo} alt="logo"/>
				</div>
				<div className="bottom-row">
					<p>Copyright © 2020 Task Manage Software Tools</p>
					<Link to='/terms'>Terms and <br/>conditions</Link>
				</div>
			</div>
			<div className="form-cover loginForm">
				<h1 className="form-title">Sign In</h1>
				<LoginForm users={users}/>
				<p className="reset-link">Don't have an account?
					<Link to='/register'>Register</Link>
				</p>
			</div>
		</div>
	)
};

export default Login;
