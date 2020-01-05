import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import theme from './muiTheme'
import store from './store/store'
import { users, projects, tasks } from './utils/getStore'

import AuthRoute from './components/common/AuthRoute'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

const App = () => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const register = (formData) => {
		dispatch()
	};

	return (
	  <Router>
		  <Switch>
			  {/*<Route path='/dashboard' render = {() => {*/}
			  	{/*if(auth){*/}
			  		{/*return <Dashboard />;*/}
				{/*} else {*/}
			  		{/*return (*/}
			  			{/*<Redirect to="/login"/>*/}
					{/*)*/}
				{/*}*/}
			  {/*}}/>*/}
			  <AuthRoute path='/dashboard' component={Dashboard} redirect="/login"/>
			  <Route path='/login' component={Login}/>
			  <Route path='/register' component={Register}/>
			  {/*<Route path='/login' component={Login}/>*/}

			  {/*<AuthRoute path='/login' component={Login} noAuth redirect="/dashboard"/>*/}
			  {/*<AuthRoute path='/register' component={Register} noAuth redirect="/dashboard"/>*/}
			  {/*<Route exact path='/register' component={Register} />*/}
			  <Redirect exact path="/*" to={auth ? '/dashboard' : '/login'}/>

			  <Route component={NotFound}/>
		  </Switch>
	  </Router>
	)
};

const AppProvider = () => (
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);

export default AppProvider;
