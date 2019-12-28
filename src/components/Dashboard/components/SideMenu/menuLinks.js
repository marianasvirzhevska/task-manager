import Projects from "../Projects";

export const getMenuLinks = (user) => {
	let menuLinks = [];

	menuLinks.push({
		path: '/dashboard/profile',
		label: 'Profile'
	});

	menuLinks.push({
		path: '/dashboard/projects',
		label: 'Projects'
	});

	menuLinks.push({
		path: '/dashboard/tasks',
		label: 'Tasks'
	});

	if (user.admin){
		menuLinks.push({
			path: '/dashboard/users',
			label: 'Users'
		})
	}
	return menuLinks;
};
