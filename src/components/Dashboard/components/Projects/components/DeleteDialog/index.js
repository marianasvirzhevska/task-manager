import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { useDispatch } from "react-redux"

import { deleteProject } from "../../../../../../store/actions"
import { AppDialog } from '../../../../../common/Dialog'
import deleteIcon from '../../../../../../assets/icons/ico-trash.svg'

const DeleteDialog = (props) => {
	const {open, handleClose, project} = props;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteProject(project));
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

