import {
	REGISTER_ADMIN,
	LOGIN_USER,
	LOGOUT
} from '../constants'


function registerUser(user){
	return {
		type: REGISTER_ADMIN,
		payload: user
	}
}

export const onRegister = () => ( user ) => {
	return function(dispatch) {
		dispatch(registerUser(user));
	}
};

export const onLogin = ( user ) => {
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
