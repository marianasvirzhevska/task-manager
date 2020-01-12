import {
	INITIAL_TASKS,
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK
} from '../constants'


const TasksState = {
	users: {},
	error: null
};

const tasksReducer = ( state = TasksState, action) => {
	switch (action.type) {
		case INITIAL_TASKS:
			return {
				...state,
				tasks: action.payload,
				error: null
			};

		case ADD_TASK:
			return {
				...state,
				tasks: action.payload,
				error: null
			};
		case EDIT_TASK:
			return {
				...state,
				tasks: action.payload,
				error: null
			};

		case DELETE_TASK:
			return {
				...state,
				tasks: action.payload,
				error: null
			};

		default:
			return state;
	}
};

export default tasksReducer;