import {
	INITIAL_USERS,
	INITIAL_PROJECTS,
	INITIAL_TASKS
} from '../constants'


const InitialState = {
	users: {},
	projects: {},
	tasks: {},
	error: null
};

const initialReducer = ( state = InitialState, action) => {
	switch (action.type) {
		case INITIAL_USERS:
			return {
				...state,
				users: action.payload,
				error: null
			};

		case INITIAL_PROJECTS:
			return {
				...state,
				projects: action.payload,
				error: null
			};
		case INITIAL_TASKS:
			return {
				...state,
				tasks: action.payload,
				error: null
			};

		default:
			return state;
	}
};

export default initialReducer;