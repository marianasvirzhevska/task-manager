import {
	INITIAL_USER,
	ADD_USER,
	EDIT_USER,
	DELETE_USER,
	UPDATE_USERS
} from '../constants'


export function setInitialUsers(users){
	return {
		type: INITIAL_USER,
		payload: users
	}
}

export const addUser = (user) => {
	return {
		type: ADD_USER,
		payload: user
	}
};

export const editUser = (user) => {
	return {
		type: EDIT_USER,
		payload: user
	}
};

export const deleteUser = (user) => {
	return {
		type: DELETE_USER,
		payload: user
	}
};

export const updateUsers = (users) => {
	return {
		type: UPDATE_USERS,
		payload: users
	}
};
