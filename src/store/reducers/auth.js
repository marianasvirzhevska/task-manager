import {
	REGISTER_ADMIN
} from '../constants'

const AuthState = {
	user: {},
	auth: false,
	error: null
};

const authReducer = ( state = AuthState, action) => {
	switch (action.type) {
		case REGISTER_ADMIN:
			return {
				...state,
				auth: true,
				user: action.payload,
				error: null
			};

		default:
			return state;
	}
};

export default authReducer;