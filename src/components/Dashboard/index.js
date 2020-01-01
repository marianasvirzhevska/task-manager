import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import Users from './components/Users'
import EditProfile from './components/EditProfile'
import MenuDrawer from './components/MenuDrawer'

const Dashboard = () => {
	let { path } = useRouteMatch();
	return (
		<div className="dashboard-page">
			<MenuDrawer />
			<Switch>
				<Route exact path={`${path}/projects`} component={Projects}/>
				<Route exact path={`${path}/tasks`} component={Tasks}/>
				<Route exact path={`${path}/users`} component={Users}/>
				<Route exact path={`${path}/edit`} component={EditProfile}/>
			</Switch>
		</div>
	)
};

export default Dashboard;
