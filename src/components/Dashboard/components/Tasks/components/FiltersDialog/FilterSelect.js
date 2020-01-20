import React, { useState } from 'react';
import PropTypes from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';

import {colors, fontSizes} from "../../../../../../muiTheme";

const useStyles = makeStyles(theme => ({
	root:{
		width: '100%',
		margin: '10px 0'
	},
	formControl:{
		width: '100%'
	},
	itemRoot:{
		borderRadius: 3,
		padding: '5px 7px',
		margin: '1px 5px',
		'&:hover':{
			backgroundColor: colors.greyBg
		}
	},
	selectedItem:{
		backgroundColor: `${colors.blueBtn} !important`,
		color: colors.white,
	}
}));

const BootstrapInput = withStyles(theme => ({
	root: {},
	input: {
		borderRadius: 3,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: `1px solid ${colors.borderColor}`,
		fontSize: fontSizes.button,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		'&:focus': {
			borderRadius: 3,
			backgroundColor: colors.white,
			borderColor: colors.borderFocus,
			boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
		},
	},
}))(InputBase);

const FilterSelect = ({id, data, handleChange, selected}) => {
	const classes = useStyles();
	const [value, setState] = useState(selected || '');

	const handleFilter = event => {
		let value = event.target.value;

		setState(value);
		handleChange(value);
	};

	return(
		<div className={classes.root}>
			<FormControl className={classes.formControl}>
				<Select
					id={id}
					value={value}
					onChange={handleFilter}
					input={<BootstrapInput />}
				>
					{
						data && data.map((item) => {
							const {id, label} = typeof item === 'object' ? item : {id: item, label: item};
							return(
								<MenuItem key={id} value={id}
										  classes={{
										  	root: classes.itemRoot,
										  	selected: classes.selectedItem
										  }}
								>
									{label}
								</MenuItem>
							)
						})
					}
				</Select>
			</FormControl>
		</div>
	)
};

Select.propsTypes = {
	id: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired,
	selected: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,]),

};

export default FilterSelect;