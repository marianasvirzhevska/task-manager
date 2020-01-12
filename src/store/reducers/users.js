import {
	INITIAL_USER,
	ADD_USER,
	EDIT_USER,
	DELETE_USER
} from '../constants'


const UsersState = {
	users: {},
	error: null
};

const usersReducer = ( state = UsersState, action) => {
	switch (action.type) {
		case INITIAL_USER:
			return {
				...state,
				users: action.payload,
				error: null
			};

		case ADD_USER:
			return {
				...state,
				users: action.payload,
				error: null
			};
		case EDIT_USER:
			return {
				...state,
				users: action.payload,
				error: null
			};

		case DELETE_USER:
			return {
				...state,
				users: action.payload,
				error: null
			};

		default:
			return state;
	}
};

export default usersReducer;