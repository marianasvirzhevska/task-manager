import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { connect, useSelector, useDispatch } from 'react-redux'

import Input from '../../../../../common/Input'
import SelectField from '../../../../../common/SelectField'
import { addTask, editProject, editUser } from "../../../../../../store/actions";

let Form = ({invalid, submitting, pristine, handleClose}) => {
	const dispatch = useDispatch();
	const formValues = useSelector(state => getFormValues('addTask')(state));

	const users = useSelector(state => state.users.users);
	const projects = useSelector(state => state.projects.projects);
	const tasks = useSelector(state => state.tasks.tasks);

	const getTask = () => {
		const task = { ...formValues };
		task.id = tasks.length + 2; // TODO add id generator
		task.project = {id: task.project};
		task.user = task.user ? {id: task.user} : null;
		task.status = 'Pending';
		return task;
	};

	const updateProject = (task) => {
		const projectId = task.project.id;
		const project = {...projects.find(item => item.id === projectId)};
		project.tasks.push({id: task.id});

		return project;
	};

	const updateUser = (task) => {
		const userId = task.user.id;
		const user = {...users.find(item => item.id === userId)};
		user.tasks = [...user.tasks, task.id];

		return user;
	};

	const handleCreate = (e) => {
		e.preventDefault();
		const task = getTask();

		dispatch(addTask(task));
		dispatch(editProject(updateProject(task)));
		task.user && dispatch(editUser(updateUser(task)));
		handleClose();
	};

	const usersOptions = users.map(user => {
		return {
			valueId: user.id,
			valueLabel: `${user.firstName} ${user.lastName}`
		}
	});

	const projectsOptions = projects.map(project => {
		return {
			valueId: project.id,
			valueLabel: project.projectTitle
		}
	});

	return (
		<form className="dialog-form" onSubmit={handleCreate}>
			<div className="flexed-row">
				<Field component={Input}
					type="text"
					name="title"
					label="Enter Task title"
					placeholder="Please enter"
				/>
			</div>
			<div className="flexed-row">
				<div className="half-column">
					<Field
						name="project"
						component={SelectField}
						fullWidth
						label="Select project"
						items={projectsOptions}
					/>
				</div>
				<div className="half-column">
					<Field
						name="user"
						component={SelectField}
						fullWidth
						label="Assign to User"
						items={usersOptions}
					/>
				</div>
			</div>
			<div className="flexed-row">
				<Field component={Input}
					   multiLine
					   rows='4'
					   name="description"
					   label="Enter Task description"
					   placeholder="Please enter"
				/>
			</div>
			<div className='dialog-action'>
				<Button
					color='secondary'
					variant='contained'
					type="submit"
					disabled={invalid|| submitting || pristine}
				>Save</Button>
			</div>
		</form>
	)
};

function validate(values) {
	const errors = {};

	if(!values.title){
		errors.title='Task title field cannot be blank';
	}
	if(!values.project){
		errors.project='Project short form field cannot be blank';
	}
	if(!values.description){
		errors.description='Please select project';
	}
	return errors;
}

Form = reduxForm({
	form: 'addTask',
	validate
})(Form);

export default connect(state => ({
	values: getFormValues("addTask")(state)
}))(Form);


