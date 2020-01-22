export const users = [
	{id: 1, firstName: 'Mark', lastName: 'Evans', email: 'mark.evans@mail.com', password: '111111', admin: false, companyName: 'Dionis', tasks: [{id:1}]},
	{id: 2, firstName: 'Adam', lastName: 'Tailor', email: 'adam.tailor@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:2}, {id:8}]},
	{id: 3, firstName: 'Sarah', lastName: 'Rodgers', email: 'sarah.rodgers@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:3}, {id: 14}]},
	{id: 4, firstName: 'Oliver', lastName: 'Green', email: 'oliver.green@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: []},
	{id: 5, firstName: 'Kate', lastName: 'Adams', email: 'kate.adams@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:4}, {id: 13}]},
	{id: 6, firstName: 'Robin', lastName: 'Willson', email: 'robin.wilson@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:5}]},
	{id: 7, firstName: 'Timoti', lastName: 'Brown', email: 'timoti.brown@mail.com', password: 'qwerty', admin: true, companyName: 'Dionis', tasks: [{id:6}]},
	{id: 8, firstName: 'Jerom', lastName: 'Brown', email: 'admin@mail.com', password: 'admin1', admin: true, companyName: 'Dionis', tasks: [{id:7}]},
	{id: 9, firstName: 'Robert', lastName: 'Nilson', email: 'user.user@mail.com', admin: false, companyName: 'Dionis'},
	{id: 10, firstName: 'Nika', lastName: 'Simpson', email: 'nikka.nik@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:9}, {id: 10}]},
	{id: 11, firstName: 'Susana', lastName: 'Willson', email: 'susana.wilson@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:11}]},
	{id: 12, firstName: 'Orlando', lastName: 'Mars', email: 'orlando.mars@mail.com', password: 'qwerty', admin: false, companyName: 'Dionis', tasks: [{id:12}]},
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
		title: 'Filters on Dashboard',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 4},
		user: {id: 7}
	},
	{
		id:7,
		title: 'Correct Forms',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 4},
		user: {id: 8}
	},
	{
		id:8,
		title: 'Improve page loading',
		description: 'Develop markup according to the customer design',
		status: 'Pending',
		project: {id: 4},
		user: {id: 2}
	},
	{
		id: 9,
		title: 'Update product page',
		description: 'Redesign product description and options. Add \'Comment\' button, which allows user add comments to the current product',
		status: 'InProgress',
		project: {id: 2},
		user: {id: 10}
	},
	{
		id: 10,
		title: 'Add Email verifications',
		description: 'Send an email to user',
		status: 'InProgress',
		project: {id: 2},
		user: {id: 10}
	},
	{
		id: 11,
		title: 'Prod/Dev deploy adjustment',
		description: 'Correct Prod/Dev variables',
		status: 'Pending',
		project: {id: 4},
		user: {id: 11}
	},
	{
		id: 12,
		title: 'Layout corrections',
		description: 'Check and correct markup according to the Layout design',
		status: 'InProgress',
		project: {id: 3},
		user: {id: 12}
	},
	{
		id: 13,
		title: 'Safari bug-fixes',
		description: 'Remove auto-fill bg-colors on inputs',
		status: 'Done',
		project: {id: 3},
		user: {id: 5}
	},
	{
		id: 14,
		title: 'Firefox bug-fixes',
		description: 'Hide vertical scrollbars on side menu',
		status: 'InProgress',
		project: {id: 3},
		user: {id: 3}
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
		tasks: [{id:4}, {id:9}, {id: 10}]
	},
	{
		id: 3,
		projectTitle: 'Info Viewer',
		projectAv: 'IW',
		projectLink: 'https://material-ui.com',
		tasks: [{id:5}, {id: 12}, {id: 13}, {id: 14}]
	},
	{
		id: 4,
		projectTitle: 'Random Name',
		projectAv: 'RN',
		projectLink: 'https://react-redux.js.org/next/api/hooks',
		tasks: [{id:6}, {id:7}, {id: 8}, {id: 11}]
	}
];

export const getUsers = (users) => {

};

export const getTasks = (tasks) => {

};

export const getProjects = (projects) => {

};