import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const ProjectItem = (props) => {
	const { project, handleEdit, handleDelete } = props;
	const { projectTitle, projectAv, projectLink, tasks, id } = project;

	return(
		<TableRow>
			<TableCell>
				<div className="table-project-title">
					<Avatar>{projectAv}</Avatar>
					<p>{projectTitle}</p>
				</div>
			</TableCell>
			<TableCell>{projectLink}</TableCell>
			<TableCell>
				<Link to={`/dashboard/tasks:${id}`}>{tasks.length}</Link>
			</TableCell>
			<TableCell className="actions">
				<div className="actions">
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

ProjectItem.propTypes = {
	project: PropTypes.object.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default ProjectItem;
