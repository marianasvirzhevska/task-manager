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
	const { title, projectAv, link, tasks, id, handleEdit, handleDelete } = props;

	return(
		<TableRow>
			<TableCell>
				<div className="table-project-title">
					<Avatar>{projectAv}</Avatar>
					<p>{title}</p>
				</div>
			</TableCell>
			<TableCell>{link}</TableCell>
			<TableCell>
				<Link to={`/dashboard/tasks:${id}`}>{tasks}</Link>
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
	title: PropTypes.string.isRequired,
	projectAv: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	tasks: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default ProjectItem;
