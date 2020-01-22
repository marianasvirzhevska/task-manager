import React from 'react'
import PropTypes from 'prop-types'
import TablePagination from '@material-ui/core/TablePagination';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../muiTheme'

const Pagination = (props) => {
	const classes = useStyles();
	const {count, page, rowsPerPage, onChangePage, onChangeRowsPerPage} = props;
	return (
		<TablePagination
			rowsPerPageOptions={[5, 8, 10]}
			component="div"
			count={count}
			rowsPerPage={rowsPerPage}
			page={page}
			onChangePage={onChangePage}
			onChangeRowsPerPage={onChangeRowsPerPage}
			classes={{
				toolbar: classes.toolbar,
				select: classes.select,
				selectIcon: classes.selectIcon,


			}}
		/>
	)
};

const useStyles = makeStyles(() =>
	createStyles({
		toolbar:{
			paddingRight: 14,
		},
		select:{
			padding: 8,
			'&:focus':{
				backgroundColor: colors.white,
			}
		},
		selectIcon:{
			right: 0,
			top: 4,
		}
	}));

Pagination.propTypes = {
	count: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired,
	onChangeRowsPerPage: PropTypes.func.isRequired,
};

export default Pagination;