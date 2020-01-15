import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import TaskPage from './components/Tasks/components/TaskPage'
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
				<Route exact path={`${path}/tasks/task/:id`} component={TaskPage}/>
				<Route exact path={`${path}/users`} component={Users}/>
				<Route exact path={`${path}/profile`} component={EditProfile}/>
				<Redirect exact path={`${path}`} to={`${path}/tasks`}/>
			</Switch>
		</div>
	)
};

export default Dashboard;
