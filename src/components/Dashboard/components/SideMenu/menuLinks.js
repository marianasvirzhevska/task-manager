import React from 'react'
import PeopleIcon from '@material-ui/icons/People'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import ListAltIcon from '@material-ui/icons/ListAlt'

export const getMenuLinks = (user) => {
	let menuLinks = [];

	menuLinks.push({
		path: '/dashboard/projects',
		label: 'Projects',
		icon: <FolderOpenIcon />
	});

	menuLinks.push({
		path: '/dashboard/tasks',
		label: 'Tasks',
		icon: <ListAltIcon />
	});

	if (user.admin){
		menuLinks.push({
			path: '/dashboard/users',
			label: 'Users',
			icon: <PeopleIcon />
		})
	}

	return menuLinks;
};
