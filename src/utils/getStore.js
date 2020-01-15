export const users = [
	{id: 1, firstName: 'Mark', lastName: 'Evans', email: 'mark.evans@mail.com', password: '111111', admin: false, companyName: 'Dionis', tasks: [{id:1}]},
	{id: 2, firstName: 'Adam', lastName: 'Tailor', email: 'adam.tailor@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:2}]},
	{id: 3, firstName: 'Sarah', lastName: 'Rodgers', email: 'sarah.rodgers@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:3}]},
	{id: 4, firstName: 'Oliver', lastName: 'Green', email: 'oliver.green@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: []},
	{id: 5, firstName: 'Kate', lastName: 'Adams', email: 'kate.adams@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:4}]},
	{id: 6, firstName: 'Robin', lastName: 'Willson', email: 'robin.wilson@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:5}]},
	{id: 7, firstName: 'Timoti', lastName: 'Brown', email: 'timoti.brown@mail.com', password: 'qwerty', admin: true, companyName: 'Dionis', tasks: [{id:6}]},
	{id: 8, firstName: 'Jerom', lastName: 'Brown', email: 'admin@mail.com', password: 'admin1', admin: true, companyName: 'Dionis', tasks: [{id:7}]}
];

export const tasks = [
	{
		id: 1,
		title: 'Create layout',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 1},
		user: {id: 1}
	},
	{
		id: 2,
		title: 'Add Form validation',
		description: 'Add required and optional fields',
		status: 'InProgress',
		project: {id: 1},
		user: {id: 2}
	},
	{
		id: 3,
		title: 'Add Filters to main dashboard',
		description: 'Add required and optional fields',
		status: 'Done',
		project: {id: 1},
		user: {id: 3}
	},
	{
		id: 4,
		title: 'Create layout',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 2},
		user: {id: 5}
	},
	{
		id: 5,
		title: 'Create layout',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 3},
		user: {id: 6}
	},
	{
		id: 6,
		title: 'Create layout',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 4},
		user: {id: 7}
	},
	{
		id:7,
		title: 'Create layout',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 4},
		user: {id: 8}
	}
];

export const projects = [
	{
		id: 1,
		projectTitle: 'Travel Team',
		projectAv: 'TT',
		projectLink: 'https://material-ui.com',
		tasks: [{id:1}, {id:2}, {id:3}]
	},
	{
		id: 2,
		projectTitle: 'Ori Game',
		projectAv: 'OG',
		projectLink: 'https://material-ui.com',
		tasks: [{id:4}]
	},
	{
		id: 3,
		projectTitle: 'Info Viewer',
		projectAv: 'IW',
		projectLink: 'https://material-ui.com',
		tasks: [{id:5}]
	},
	{
		id: 4,
		projectTitle: 'Random Name',
		projectAv: 'RN',
		projectLink: 'https://react-redux.js.org/next/api/hooks',
		tasks: [{id:6}, {id:7}]
	}
];

export const getUsers = (users) => {

};

export const getTasks = (tasks) => {

};

export const getProjects = (projects) => {

};