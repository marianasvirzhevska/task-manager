import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility';
import StatusLabel from '../../../../../common/StatusLabel'


const TaskItem = (props) => {
	const { task, handleEdit, handleDelete } = props;
	const { title, status, user, project, id } = task;

	return(
		<TableRow>
			<TableCell>{id}</TableCell>
			<TableCell>
				<Avatar>{project.projectAv}</Avatar>
			</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell>{user ? user.firstName && user.lastName : '-'}</TableCell>
			<TableCell><StatusLabel status={status} /></TableCell>
			<TableCell className="actions">
				<div className="actions">
					<IconButton
						onClick={() => {}}>
						<VisibilityIcon size="small"/>
					</IconButton>
					<IconButton
						onClick={handleEdit}>
						<EditOutlinedIcon size="small"/>
					</IconButton>
					<IconButton
						onClick={handleDelete}>
						<DeleteOutlinedIcon size="small"/>
					</IconButton>
				</div>
			</TableCell>
		</TableRow>
	)
};

TaskItem.propTypes = {
	task: PropTypes.object.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default TaskItem;
