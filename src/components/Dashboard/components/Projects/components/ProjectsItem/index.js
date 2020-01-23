import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import ActionsMenu from '../../../../../common/ActionsMenu'

const ProjectItem = (props) => {
	const { project, handleEdit, handleDelete } = props;
	const { projectTitle, projectAv, projectLink, tasks, id } = project;
	const isAdmin = useSelector(state => state.auth.user.admin);
	const actions = [
		{handle: handleEdit, label: 'Edit'},
		{handle: handleDelete, label: 'Delete'}
		];

	return(
		<TableRow>
			<TableCell>
				<div className="table-project-title">
					<Avatar>{projectAv}</Avatar>
					<p>{projectTitle}</p>
				</div>
			</TableCell>
			<TableCell className='cell-mobile'>{projectLink}</TableCell>
			<TableCell>
				<Link to={`/dashboard/tasks?type=Projects&id=${id}`}>{tasks.length}</Link>
			</TableCell>
			{
				isAdmin &&
				<TableCell className="actions">
					<ActionsMenu actions={actions}/>
					<div className="actions actions-mobile">
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

ProjectItem.propTypes = {
	project: PropTypes.object.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default ProjectItem;
