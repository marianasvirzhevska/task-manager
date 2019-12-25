import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import getUser from './utils/getUser'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
	const isAuthenticated = getUser();
	console.log(Boolean(isAuthenticated));
	return (
	  <Router>
		  <Switch>
			  <Route exact path='/dashboard' component={Dashboard} />
			  <Route exact path='/register' component={Register} />
			  <Route exact path='/login' component={Login} />
			  <Redirect exact path="/*" to={isAuthenticated ? '/dashboard' : '/login'}/>
		  </Switch>
	  </Router>
	)
};

const AppProvider = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

export default AppProvider;
