import {
	REGISTER_ADMIN,
	LOGIN_USER,
	LOGOUT
} from '../constants'


export function registerUser(user){
	return {
		type: REGISTER_ADMIN,
		payload: user
	}
}

export const login = (user) => {
	return {
		type: LOGIN_USER,
		payload: user
	}
};

export const logout = () => {
	return {
		type: LOGOUT
	}
};
