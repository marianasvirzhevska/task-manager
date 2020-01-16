import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { useDispatch, useSelector } from "react-redux"

import { AppDialog } from '../../../../../common/Dialog'
import deleteIcon from '../../../../../../assets/icons/ico-trash.svg'
import { deleteTask, editProject, editUser } from "../../../../../../store/actions";

const DeleteDialog = (props) => {
	const { open, handleClose, task } = props;
	const dispatch = useDispatch();
	const projects = useSelector(state => state.projects.projects);
	const users = useSelector(state => state.users.users);
	const project = task && projects.find( el => el.id === task.project.id);

	const getUpdate = (task, data) => data.map( item => {
		const index = item.tasks
			.findIndex(el => el.id === task.id);

		if (index !== -1){
			item.tasks.splice(index, 1);
		}
		return item;
	});

	const handleDelete = () => {
		dispatch(deleteTask(task));
		dispatch(editProject(getUpdate(task, users))); // remove task from assign user
		dispatch(editUser(getUpdate(task, projects))); // remove task from related project

		handleClose();
	};

	return(
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<div className='delete-container'>
				<img src={deleteIcon} alt=""/>
				<h3 className='delete-title'>Delete Task</h3>
				<div className='user-info'>
					<div className='user-img'>
						<Avatar>{project && project.projectAv}</Avatar>
					</div>
					<div className='task-details'>
						<h4>{task && task.title}</h4>
						<p>{task && task.description}</p>
					</div>
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
	task: PropTypes.object
};

export default DeleteDialog;

