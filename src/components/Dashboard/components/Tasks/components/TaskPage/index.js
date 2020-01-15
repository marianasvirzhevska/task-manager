import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router'
import Paper from '@material-ui/core/Paper'
import { useSelector } from 'react-redux'

import back from '../../../../../../assets/icons/ico-back.svg'
import StatusMenu from './StatusMenu'
import {
	AppBar,
	AppBarBefore
} from '../../../AppBar'

const TaskPage = () => {
	const { params } = useRouteMatch();
	const tasks = useSelector(state => state.tasks.tasks);
	const users = useSelector(state => state.users.users);
	const projects = useSelector(state => state.projects.projects);
	const id = +params.id;

	const task = tasks.find(task => task.id === id);
	const user = users.find(user => user.id === task.user.id);
	const project = projects.find(project => project.id === task.project.id);

	return (
		<div className='dashboard-content'>
			<AppBar title="Task details">
				<AppBarBefore>
					<div className="back-btn">
						<Link to='/dashboard/tasks'>
							<img src={back} alt='icon'/>
							Back
						</Link>
					</div>
				</AppBarBefore>
			</AppBar>
			<div className='scroll-container paper-wrap'>
				<div className='table-cover'>
					<Paper elevation={1}>
						<div className='forms-container'>
							<div className='task-title'>
								<div className='task-title-row'>
									<h2 className='forms-subtitle'>{id} {task.title}</h2>
									<div className='task-title-menu'>
										<StatusMenu status={task.status}/>
									</div>
								</div>
								<div className='task-title-info'>
									<h4>Project: <span>{project && project.projectTitle}</span></h4>
									<h4>Assign to: <span>{user ? user.firstName + ' ' + user.lastName : '-'}</span></h4>
								</div>
							</div>
							<div className='task-description'>
								<p>{task.description}</p>
							</div>
						</div>
					</Paper>
				</div>
			</div>
		</div>
	)
};

export default TaskPage;
