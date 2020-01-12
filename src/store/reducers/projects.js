import {
	INITIAL_PROJECT,
	ADD_PROJECT,
	EDIT_PROJECT,
	DELETE_PROJECT
} from '../constants'


const ProjectsState = {
	projects: {},
	error: null
};

const projectsReducer = ( state = ProjectsState, action) => {
	switch (action.type) {
		case INITIAL_PROJECT:
			return {
				...state,
				projects: action.payload,
				error: null
			};

		case ADD_PROJECT:
			return {
				...state,
				projects: action.payload,
				error: null
			};
		case EDIT_PROJECT:
			return {
				...state,
				projects: action.payload,
				error: null
			};

		case DELETE_PROJECT:
			return {
				...state,
				projects: action.payload,
				error: null
			};

		default:
			return state;
	}
};

export default projectsReducer;