import {
	INITIAL_USER,
	ADD_USER,
	EDIT_USER,
	DELETE_USER,
	UPDATE_USERS
} from '../constants'


const UsersState = {
	users: [],
	loaded: false,
	error: null
};

const usersReducer = ( state = UsersState, action) => {
	switch (action.type) {
		case INITIAL_USER:
			return {
				...state,
				users: action.payload,
				loaded: true,
				error: null
			};

		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
				error: null
			};
		case EDIT_USER:
			const user = action.payload;
			const editedUsers = state.users.map((item) => {
				if(item.id !== user.id){
					return item;
				}

				return {
					...item,
					...user
				}
			});
			return {
				...state,
				users: editedUsers,
				errors: null
			};

		case DELETE_USER:
			const _user = action.payload;
			const userIndex = state.users.findIndex((item) => item.id === _user.id);

			const newUsers = [...state.users];
			newUsers.splice(userIndex, 1);

			return {
				...state,
				users: newUsers,
				error: null
			};

		case UPDATE_USERS:
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