import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import theme from './muiTheme'
import store from './store/store'
import { users, projects, tasks } from './utils/getStore'
import { INITIAL_TASKS, INITIAL_USER, INITIAL_PROJECT } from './store/constants'

import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Terms from './components/Terms'

const App = () => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const init = () => {
		dispatch(
			{
				type: INITIAL_USER,
				payload: users
			}
		);
		dispatch(
			{
				type: INITIAL_PROJECT,
				payload: projects
			}
		);
		dispatch(
			{
				type: INITIAL_TASKS,
				payload: tasks
			}
		);
	};
	init();

	return (
	  <Router>
		  <Switch>
			  <Route path='/login' component={Login}/>
			  <Route path='/register' component={Register}/>
			  <Route path='/dashboard' component={Dashboard}/>
			  <Route path='/terms' component={Terms}/>
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
