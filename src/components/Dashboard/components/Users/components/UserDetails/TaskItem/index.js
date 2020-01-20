import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

import StatusLabel from '../../../../../../common/StatusLabel'

const TaskItem = ({task}) => {
	const projects = useSelector(state => state.projects.projects);
	const project = projects.find(item => item.id === task.project.id);

	return (
		<div className='user-task'>
			<Link to={`/dashboard/tasks/task/${task.id}`}>
				<div className='main'>
					<Avatar>{project && project.projectAv}</Avatar>
					<p>{task.title}</p>
				</div>
				<StatusLabel status={task.status} />
			</Link>
		</div>
	)
};

TaskItem.propsTypes = {
	task: PropTypes.object.isRequired,
};

export default TaskItem;