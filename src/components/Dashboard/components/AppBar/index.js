import React from 'react'
import { IconButton, InputBase} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/index'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import PropTypes from 'prop-types'
import { colors, fontSizes } from '../../../../muiTheme'

export const AppBar = ( props ) => {
  const { title, children, subtitle } = props;
  const classes = useStyles();

  return(
    <div className={classes.appBar}>
      <h1 className={classes.title}>
        {title}
        {subtitle &&
          <span className={classes.subtitle}>{subtitle}</span>
        }
      </h1>
      {children}
    </div>
  )
};

AppBar.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.any
};

export const AppBarBefore = ( props ) => {
  const {children} = props
  const classes = useStyles();

  return (
    <div className={classes.leftActions}>
      {children}
    </div>
  )
};

AppBarBefore.propTypes = {
	children: PropTypes.any.isRequired
};

export const AppBarAfter = ( props ) => {
  const {children} = props;
  const classes = useStyles();

  return (
    <div className={classes.rightActions}>
      {children}
    </div>
  )
};

AppBarAfter.propTypes = {
	children: PropTypes.any.isRequired
};

export const Filters = (props) => {
  const classes = useStyles();
  const {handleFilter} = props;

  return (
    <div className={classes.filters}>
      <IconButton
        onClick={handleFilter}
        className={classes.filterIcon}>
          <FilterListRoundedIcon fontSize="small"/>
      </IconButton>
    </div>
  )
};

Filters.propTypes = {
	handleFilter: PropTypes.func.isRequired
};

export const SearchField = ({onChange, clearSearch, value}) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={value}
		onChange={onChange}
        inputProps={{ 'aria-label': 'search' }}
      />
        {
			!!value ?
				<IconButton aria-label="close" className={classes.clearBtn} onClick={clearSearch}>
					<CloseRoundedIcon size="small"/>
				</IconButton>
            :
				<div className={classes.searchIcon}>
					<SearchRoundedIcon fontSize="small"/>
				</div>
        }
    </div>
  )
};

SearchField.propTypes = {
	onChange: PropTypes.func.isRequired,
	clearSearch: PropTypes.func.isRequired,
	value: PropTypes.string
};



const useStyles = makeStyles(theme => ({
	filters: {},
	filterIcon: {
		width: 36,
		height: 36,
		padding: '8px 9px',
		borderRadius: 4,
		marginLeft: 0,
		marginRight: 12,
		background: colors.white,
		border: 'solid 1px rgba(0, 0, 0, 0.09)',
		boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.08)',
	},
	search: {
		marginLeft: 0,
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: '#f0f1f4',
		'&:hover': {
			backgroundColor: '#f0f1f4',
		},
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: 0,
			width: 'auto',
		},
	},
	searchIcon: {
		right: 10,
		width: 16,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: colors.lightGreyFont
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		fontSize: fontSizes.table,
		padding: '8px 20px 8px 15px',
		transition: theme.transitions.create('width'),
		width: 0,
		[theme.breakpoints.up('sm')]: {
			width: 200,
			padding: '8px 30px 8px 15px',
		},
		'&:focus': {
			width: 150,
			padding: '8px 30px 8px 15px',
		}
	},
	appBar: {
		minHeight: 36,
		padding: '10px 0',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		background: colors.white,
		position: 'relative',
		zIndex: 1,
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
		[theme.breakpoints.up('sm')]: {
			padding: '12px 0',
		}
	},
	leftActions: {
		left: 10,
		position: 'absolute',
		display: 'flex',
		zIndex: 2,
		[theme.breakpoints.up('sm')]: {
			left: 20,
		}
	},
	rightActions: {
		right: 10,
		position: 'absolute',
		display: 'flex',
        '@media(max-width:600px)':{
			'& > button': {
				minWidth: 35,
				padding: '11px 4px',
				'& > span': {
					'&:first-child': {
						display: 'none'
					},
					'&:last-child': {
						right: 0,
						height: 14,
						width: 14,
						zIndex: 1,
						padding: 0,
						position: 'relative',
						'&:before, &:after': {
							left: 0,
							width: 14,
							content: '" "',
							height: 3,
							backfaceVisibility: 'hidden',
							background: colors.white,
						},
						'&:before': {
							position: 'absolute',
							top: 6,
						},
						'&:after': {
							position: 'absolute',
							transform: 'rotate(270deg)',
							top: 6
						}
					}
				}
			},
        },
		[theme.breakpoints.up('sm')]: {
			right: 20,
		}
	},
    title: {
      width: '100%',
      margin: 0,
      textAlign: 'center',
      fontSize: fontSizes.button,
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
		  fontSize: fontSizes.title,
	  }
    },
    subtitle:{
      fontSize: fontSizes.main,
      color: colors.label,
      display: 'block',
      marginTop: -3
    },
    clearBtn:{
		right: 0,
        zIndex: 1,
		height: '100%',
		position: 'absolute',
        padding: '5px 8px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#999999',
        fontSize: 12,
        '& > span > svg':{
		    width: 18,
            height: 18,
        }
    }
  }
));