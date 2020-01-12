import {
	INITIAL_PROJECT,
	ADD_PROJECT,
	EDIT_PROJECT,
	DELETE_PROJECT
} from '../constants'


export function setInitialProjects(projects){
	return {
		type: INITIAL_PROJECT,
		payload: projects
	}
}

export const addProject = (projects) => {
	return {
		type: ADD_PROJECT,
		payload: projects
	}
};

export const editProject = (projects) => {
	return {
		type: EDIT_PROJECT,
		payload: projects
	}
};

export const deleteProject = (projects) => {
	return {
		type: DELETE_PROJECT,
		payload: projects
	}
};
