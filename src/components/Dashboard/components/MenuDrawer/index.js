import React, { useState } from 'react'
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles/index'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { colors, fontSizes } from '../../../../muiTheme'
import HideIcon from '@material-ui/icons/SkipPreviousRounded'
import { SideMenu } from '../SideMenu'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	drawer: {
		flexShrink: 0,
		width: drawerWidth,
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: 80,
		[theme.breakpoints.up('sm')]: {
			width: 80,
		},
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		background: colors.blueBg,
		border: 'none'
	},
	hideBtn: {
		border: 'none',
		borderRadius: 0,
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '19px 34px 15px',
		background: 'rgba(0, 0, 0, 0.08)',
		'& > span': {
			color: '#e6f4f6',
			fontWeight: 'normal',
			fontSize: fontSizes.table,
            '& > span':{
			    whiteSpace: 'nowrap'
            },
			'& > svg': {
				marginRight: 12
			}
		},
		'&:hover': {
			background: 'rgba(0, 0, 0, 0.12)',
		}
	},
	hideBtnSmall: {
		padding: '19px 28px 15px',
		'& > span > span': {
			display: 'none'
		},
		'& span > svg': {
			transform: 'rotate(180deg)'
		}
	}
}));

const MenuDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })
      }}
      open={open}
    >
      <SideMenu open={open}/>
      <Button
        variant="contained"
        onClick={handleDrawerToggle}
        className={clsx(classes.hideBtn, {
          [classes.hideBtnSmall]: !open,
        })}
      >
        <HideIcon/>
        {open && <span>Hide menu</span>}
      </Button>
    </Drawer>
  )
};

export default MenuDrawer