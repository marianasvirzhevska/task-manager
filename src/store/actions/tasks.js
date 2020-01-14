import {
	INITIAL_TASKS,
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK
} from '../constants'


export function setInitialTasks(tasks){
	return {
		type: INITIAL_TASKS,
		payload: tasks
	}
}

export const addTask = (task) => {
	return {
		type: ADD_TASK,
		payload: task
	}
};

export const editTask = (task) => {
	return {
		type: EDIT_TASK,
		payload: task
	}
};

export const deleteTask = (task) => {
	return {
		type: DELETE_TASK,
		payload: task
	}
};
