import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'

import ActionsMenu from '../../../../../common/ActionsMenu'


const UserItem = (props) => {
	const { user, handleEdit, handleDelete, handleView } = props;
	const isAdmin = useSelector(state => state.auth.user.admin);
	const getActions = (isAdmin) => {
		let actions = [];

		actions.push({
			label: 'View',
			handle: handleView
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
			<TableCell>{user.firstName} {user.lastName}</TableCell>
			<TableCell className='cell-mobile'>{user.email}</TableCell>
			<TableCell className='cell-mobile'>
				{ (user.tasks && (user.tasks.length > 0)) ?
					<Link to={`/dashboard/tasks?type=Users&id=${user.id}`}>{user.tasks && user.tasks.length}</Link>
					:
					'-'
				}
			</TableCell>
			<TableCell className="actions">
				<ActionsMenu actions={getActions(isAdmin)}/>
				<div className="actions actions-mobile">
					<IconButton
						onClick={handleView}>
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
	handleDelete: PropTypes.func.isRequired,
	handleView:  PropTypes.func.isRequired,
};

export default UserItem;
