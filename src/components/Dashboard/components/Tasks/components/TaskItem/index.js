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


const TaskItem = (props) => {
	const { task, handleEdit, handleDelete, project, user } = props;
	const { title, status, id } = task;
	const isAdmin = useSelector(state => state.auth.user.admin);

	return(
		<TableRow>
			<TableCell>{id}</TableCell>
			<TableCell>
				<Link to={``}>
					<Avatar>{project && project.projectAv}</Avatar>
				</Link>
			</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell>{user ? user.firstName + ' ' + user.lastName : '-'}</TableCell>
			<TableCell><StatusLabel status={status} /></TableCell>
			{isAdmin &&
				<TableCell className="actions">
					<div className="actions">
						<Link to={`/dashboard/tasks/task/${id}`}>
							<IconButton
								onClick={() => {
								}}>
								<VisibilityIcon size="small"/>
							</IconButton>
						</Link>
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
			}
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
