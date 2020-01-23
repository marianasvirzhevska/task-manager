import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import {
	AppDialog,
	AppDialogTitle,
	AppDialogContent
} from '../../../../../common/Dialog'
import TaskItem from './TaskItem'

const UserDetails = (props) => {
	const { open, handleClose, user } = props;
	const tasks = useSelector(state => state.tasks.tasks);

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleClose={handleClose}
				title='User Details'/>
			<AppDialogContent>
				<div className='user-info-dialog'>
					<div className='user-info details'>
						<div className='task-details'>
							<p className='name'>{user && user.firstName} {user && user.lastName}</p>
							<p className='email'>{user && user.email}</p>
							<p className='role'>{
								user && (user.admin ?
									<span className='admin'>Admin</span>
									:
									<span>Employee</span>
								)}</p>
						</div>
					</div>
					<p className='user-info-title'>Assigned tasks: {(user && user.tasks.length) || '0'}</p>
					<div className='user-tasks'>
						{
							user && user.tasks.length ?
								user.tasks.map(task => {
									return (
										<TaskItem
											key={task.id}
											task={tasks && tasks.find(item => item.id === task.id)}
										/>
									)
								})
							: <p>No Task assigned</p>
						}
					</div>
				</div>
			</AppDialogContent>
		</AppDialog>
	)
};

UserDetails.propTypes = {
	user: PropTypes.object,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default UserDetails;

