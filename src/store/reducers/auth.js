import {
	REGISTER_ADMIN,
	LOGIN_USER,
	LOGOUT
} from '../constants'


const AuthState = {
	user: {},
	// user: 	{id: 8, firstName: 'Jerom', lastName: 'Brown', email: 'admin@mail.com', password: 'admin1', admin: true, companyName: 'Dionis', tasks: [{id:13}]},
	// auth: true,
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

		case LOGIN_USER:
			return {
				...state,
				auth: true,
				user: action.payload,
				error: null
			};
		case LOGOUT:
			return {
				...state,
				auth: false,
				user: {},
				error: null
			};

		default:
			return state;
	}
};

export default authReducer;