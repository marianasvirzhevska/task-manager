import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types'

import StatusLabel from '../../../../../../common/StatusLabel'
import {colors} from "../../../../../../../muiTheme";

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 300,
		backgroundColor: theme.palette.background.paper,
	},
	rootListItem: {
		padding: 0,
		'&:hover':{
			backgroundColor: 'transparent'
		}
	},
	itemRoot: {
		height: 40,
		borderRadius: 3,
		padding: '5px 7px',
		color: '#70708f',
		margin: '0 5px',
		'&:hover': {
			backgroundColor: '#f3f4f7 !important'
		}
	},
	itemSelected: {
		color: colors.white,
		backgroundColor: '#00adc7 !important',
		borderRadius: 3,
		padding: '5px 7px',
		margin: '0 5px',
		'&:hover': {
			backgroundColor: '#00adc7 !important'
		}
	},
	listItemText:{
		margin: 0,
		padding: 0,
		'&:hover':{
			backgroundColor: 'transparent'
		}
	}
}));

const options = ['InProgress', 'Pending', 'Done'];

const StatusMenu = ({status, updateStatus}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const current = options.findIndex(el => el === status);
	const [selectedIndex, setSelectedIndex] = useState(current);

	const handleClickListItem = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, index) => {
		const status = options[index];

		setSelectedIndex(index);
		updateStatus(status);

		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return(
		<div className={classes.root}>
			<List disablePadding={true}>
				<ListItem
					button
					aria-haspopup="true"
					aria-controls="menu"
					aria-label="status"
					onClick={handleClickListItem}
					classes={{
						root: classes.rootListItem
					}}
				>
					<ListItemText
						secondary="Status"
						primary={options[selectedIndex]}
						classes={{
							root: classes.listItemText
						}}
					/>
				</ListItem>
			</List>
			<Menu
				id="menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{options.map((option, index) => (
					<MenuItem
						key={option}
						selected={index === selectedIndex}
						onClick={event => handleMenuItemClick(event, index)}
						classes={{
							root: classes.itemRoot,
							selected: classes.itemSelected
						}}
					>
						<StatusLabel status={option}/>
					</MenuItem>
				))}
			</Menu>
		</div>
	)
};

StatusMenu.propTypes = {
	status: PropTypes.string.isRequired,
	updateStatus: PropTypes.func
};

export default StatusMenu;