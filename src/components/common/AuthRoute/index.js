import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthRoute = (props) => {
	const { noAuth = false, redirect, component, children, ...rest } = props;
	const auth = useSelector(state => state.auth);

	return (
		<Route
			{...rest}
			render = {({location}) => auth
				? (component ? React.createElement(component) : children)
				: (
					<Redirect to={{
						pathname: redirect,
						state: { from: location }
						}}
					/>
				)
		}/>
	)
};

export default AuthRoute;
