import {
	INITIAL_TASKS,
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	UPDATE_TASKS
} from '../constants'


const TasksState = {
	tasks: [],
	loaded: false,
	error: null
};

const tasksReducer = ( state = TasksState, action) => {
	switch (action.type) {
		case INITIAL_TASKS:
			return {
				...state,
				tasks: action.payload,
				loaded: true,
				error: null
			};

		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
				error: null
			};
		case EDIT_TASK:
			const task = action.payload;
			const editedTasks = state.tasks.map((item) => {
				if(item.id !== task.id){
					return item;
				}

				return {
					...item,
					...task
				}
			});
			return {
				...state,
				tasks: editedTasks,
				errors: null
			};

		case DELETE_TASK:
			const _task = action.payload;
			const taskIndex = state.tasks.findIndex((item) => item.id === _task.id);

			const newTasks = [...state.tasks];
			newTasks.splice(taskIndex, 1);

			return {
				...state,
				tasks: newTasks,
				error: null
			};

		case UPDATE_TASKS:
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