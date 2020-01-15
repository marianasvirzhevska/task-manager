import {
	INITIAL_PROJECT,
	ADD_PROJECT,
	EDIT_PROJECT,
	DELETE_PROJECT,
	UPDATE_PROJECTS
} from '../constants'


const ProjectsState = {
	projects: [],
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
				projects: [ ...state.projects, action.payload],
				error: null
			};
		case EDIT_PROJECT:
			const project = action.payload;
			const editedProjects = state.projects.map((item) => {
				if(item.id !== project.id){
					return item;
				}

				return {
					...item,
					...project
				}
			});
			return {
				...state,
				projects: editedProjects,
				errors: null
			};

		case DELETE_PROJECT:
			const _project = action.payload;
			const projectIndex = state.projects.findIndex((item) => item.id === _project.id);

			const newProjects = [...state.projects];
			newProjects.splice(projectIndex, 1);

			return {
				...state,
				projects: newProjects,
				error: null
			};

		case UPDATE_PROJECTS:
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