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

export const addTask = (tasks) => {
	return {
		type: ADD_TASK,
		payload: tasks
	}
};

export const editTask = (tasks) => {
	return {
		type: EDIT_TASK,
		payload: tasks
	}
};

export const deleteTask = (tasks) => {
	return {
		type: DELETE_TASK,
		payload: tasks
	}
};
