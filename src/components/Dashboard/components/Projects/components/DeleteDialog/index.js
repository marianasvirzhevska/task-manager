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


	//TODO
	const getUsers = (_tasks) => {
		return [ ...users.map((user, i) => {

			if (user.tasks.length){
				let _uTasks = [...user.tasks];

				_uTasks.filter(item => {
					// console.log('item', item);
					return _tasks.find(({id}) => {
						console.log(`${item.id === id} and`, item.id, id);
						 return item === id
					})
				});

				user.tasks = [..._uTasks];

				console.log('_uTasks', i, _uTasks, 'user.tasks', user.tasks);

			}

			return user;
		})];
	};

	const handleDelete = () => {
		const _tasks = getTasks(project);

		console.log(getUsers(_tasks));

		dispatch(deleteProject(project));
		dispatch(updateTask(_tasks));
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

