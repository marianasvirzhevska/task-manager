import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import auth from './auth';
import usersReducer from './users';
import projectsReducer from './projects';
import tasksReducer from './tasks';

const reducer = combineReducers({
	auth: auth,
	form: formReducer,
	users: usersReducer,
	projects: projectsReducer,
	tasks: tasksReducer,

});

export default reducer;