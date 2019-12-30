import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from './muiTheme'
import store from './store/store'
import getUser from './utils/getUser'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

const App = () => {
	const auth = true; // temp var
	// const isAuthenticated = getUser();

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
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);

export default AppProvider;
