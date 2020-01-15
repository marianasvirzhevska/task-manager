import {
	INITIAL_PROJECT,
	ADD_PROJECT,
	EDIT_PROJECT,
	DELETE_PROJECT,
	UPDATE_PROJECTS
} from '../constants'


export function setInitialProjects(projects){
	return {
		type: INITIAL_PROJECT,
		payload: projects
	}
}

export const addProject = (project) => {
	return {
		type: ADD_PROJECT,
		payload: project
	}
};

export const editProject = (project) => {
	return {
		type: EDIT_PROJECT,
		payload: project
	}
};

export const deleteProject = (project) => {
	return {
		type: DELETE_PROJECT,
		payload: project
	}
};

export const updateProjects = (projects) => {
	return {
		type: UPDATE_PROJECTS,
		payload: projects
	}
};
