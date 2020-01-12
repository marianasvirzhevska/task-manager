import {
	INITIAL_USER,
	ADD_USER,
	EDIT_USER,
	DELETE_USER
} from '../constants'


export function setInitialUsers(users){
	return {
		type: INITIAL_USER,
		payload: users
	}
}

export const addUser = (users) => {
	return {
		type: ADD_USER,
		payload: users
	}
};

export const editUser = (users) => {
	return {
		type: EDIT_USER,
		payload: users
	}
};

export const deleteUser = (users) => {
	return {
		type: DELETE_USER,
		payload: users
	}
};
