import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'


const UserItem = (props) => {
	const { user, handleEdit, handleDelete } = props;

	return(
		<TableRow>
			<TableCell>{user.firstName} {user.lastName}</TableCell>
			<TableCell>{user.email}</TableCell>
			<TableCell>
				<Link to={`dashboard/tasks:user${user.id}`}>{user.tasks && user.tasks.length}</Link>
			</TableCell>
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

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default UserItem;
