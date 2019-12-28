import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import getUser from './utils/getUser'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

const App = () => {
	const auth = true; // temp var
	// const isAuthenticated = getUser();
	console.log(Boolean(auth));
	return (
	  <Router>
		  <Switch>
			  <Route path='/dashboard' render = {() => {
			  	if(auth){
			  		return <Dashboard />;
				} else {
			  		return (
			  			<Redirect to="/login"/>
					)
				}
			  }}/>
			  <Route exact path='/register' component={Register} />
			  <Route exact path='/login' component={Login} />
			  <Route component={NotFound}/>
		  </Switch>
	  </Router>
	)
};

const AppProvider = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default AppProvider;
