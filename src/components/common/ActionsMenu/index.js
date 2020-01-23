import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles/index'

const ActionsMenu = ({actions}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<IconButton
				aria-label="actions"
				aria-haspopup="true"
				onClick={handleClick}
				classes={{
					root: classes.icoRoot
				}}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="actions"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{actions && actions
					.map(action => {
						if(typeof(action.handle) === 'string') {
							return (
								<MenuItem
									key={action.label}
									classes={{root: classes.itemRoot}}
								>
									<Link to={action.handle}>
										{action.label}
									</Link>
								</MenuItem>
							)
						} else return (
							<MenuItem
								key={action.label}
								onClick={() => {
									handleClose();
									action.handle();
								}}
								classes={{root: classes.itemRoot}}
							>
								{action.label}
							</MenuItem>
						)
					})}
			</Menu>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root:{
		'@media(min-width:600px)':{
			display: 'none'
		}
	},
	icoRoot:{
		padding: 2,
	},
	itemRoot:{
		minHeight: 32,
		paddingTop: 4,
		paddingBottom: 4,
		'& > a': {
			textDecoration: 'none',
			color: 'initial'
		}
	}
}));

ActionsMenu.propTypes = {
	actions: PropTypes.array.isRequired
};

export default ActionsMenu;