import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { useDispatch, useSelector } from "react-redux"

import { deleteProject, updateUsers, updateTask } from "../../../../../../store/actions"
import { AppDialog } from '../../../../../common/Dialog'
import deleteIcon from '../../../../../../assets/icons/ico-trash.svg'

const DeleteDialog = (props) => {
	const {open, handleClose, project} = props;
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasks.tasks);
	const users = useSelector(state => state.users.users);

	const getTasks = (project) =>
		tasks.filter(item => item.project.id !== project.id);

	const getUsers = (users, project) => {
		const tasks = project.tasks;
		let _users = [...users];

		const removeTask = (id) => {
			_users.forEach(user => {
				const removed = user.tasks.findIndex(item => item.id === id);

				if (removed !== -1) {
					user.tasks.splice(removed, 1);
				}
			});
		};

		for (let i = 0; i < tasks.length; i++){
			removeTask(tasks[i].id);
		}

		return _users;
	};

	const handleDelete = () => {
		const _tasks = getTasks(project);

		dispatch(deleteProject(project));
		dispatch(updateTask(_tasks));
		dispatch(updateUsers(getUsers(users, project)));
		handleClose();
	};

	return(
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<div className='delete-container'>
				<img src={deleteIcon} alt=""/>
				<h3 className='delete-title'>Delete Project</h3>
				<div className='user-info'>
					<div className='user-img'>
						<Avatar>{project && project.projectAv}</Avatar>
					</div>
					<p className='user-details'>
						{project && project.projectTitle}<br/>
						<span>{`${project && project.projectLink}`}</span>
					</p>
				</div>
				<Button
					variant='contained'
					onClick={handleDelete}
					className='delete-button'
				>Delete</Button>
				<Button
					onClick={handleClose}
					className='cancel-button'
				>Cancel</Button>
			</div>
		</AppDialog>
	)
};

DeleteDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	project: PropTypes.object,
};

export default DeleteDialog;

