import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility';

import StatusLabel from '../../../../../common/StatusLabel'
import ActionsMenu from '../../../../../common/ActionsMenu'


const TaskItem = (props) => {
	const { task, handleEdit, handleDelete, project, user } = props;
	const { title, status, id } = task;
	const isAdmin = useSelector(state => state.auth.user.admin);
	const getActions = (isAdmin) => {
		let actions = [];

		actions.push({
			label: 'View',
			handle: `/dashboard/tasks/task/${id}`
		});

		if(isAdmin){
			actions.push({
				label: 'Edit',
				handle: handleEdit
			});
			actions.push({
				label: 'Delete',
				handle: handleDelete
			})
		}

		return  actions;
	};

	return(
		<TableRow>
			<TableCell className='cell-mobile'>{id}</TableCell>
			<TableCell>
				<Avatar className="avatar">{project.projectAv}</Avatar>
			</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell className='cell-mobile'>{user ? user.firstName + ' ' + user.lastName : '-'}</TableCell>
			<TableCell className='cell-mobile'><StatusLabel status={status} /></TableCell>
			<TableCell className="actions">
				<ActionsMenu actions={getActions(isAdmin)}/>
				<div className="actions actions-mobile">
					<Link to={`/dashboard/tasks/task/${id}`}>
						<IconButton>
							<VisibilityIcon size="small"/>
						</IconButton>
					</Link>
					{isAdmin &&
						<>
							<IconButton
								onClick={handleEdit}>
								<EditOutlinedIcon size="small"/>
							</IconButton>
							< IconButton
								onClick={handleDelete}>
								<DeleteOutlinedIcon size="small"/>
								</IconButton>
						</>
					}
				</div>
			</TableCell>
		</TableRow>
	)
};

TaskItem.propTypes = {
	task: PropTypes.object.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired,
	user: PropTypes.object,

};

export default TaskItem;
