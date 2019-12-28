import React from 'react';
import { match, Redirect, Route, Switch, useRouteMatch } from 'react-router'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import Users from './components/Users'
import EditProfile from './components/EditProfile'
import NotFound from '../NotFound'
import { SideMenu } from './components/SideMenu'

const Dashboard = () => {
	let { path } = useRouteMatch();
	return (
		<div className="dashboard-page">
			<SideMenu />
			<Switch>
				<Route exact to={`${path}/projects`} component={Projects}/>
				<Route exact to={`${path}/tasks`} component={Tasks}/>
				<Route exact to={`${path}/users`} component={Users}/>
				<Route exact to={`${path}/edit`} component={EditProfile}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	)
};

export default Dashboard;
