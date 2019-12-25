import {
	REGISTER_ADMIN
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
