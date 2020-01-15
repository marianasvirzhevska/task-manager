import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { connect, useSelector, useDispatch } from 'react-redux'

import Input from '../../../../../common/Input'
import SelectField from '../../../../../common/SelectField'
import { editTask, updateProjects, updateUsers } from "../../../../../../store/actions"

let Form = ({invalid, submitting, handleClose, task}) => {
	const dispatch = useDispatch();
	const formValues = useSelector(state => getFormValues('editTask')(state));
	const users = useSelector(state => state.users.users);
	const projects = useSelector(state => state.projects.projects);

	const getProjects = (task) => {
		const projectId = task.project.id;

		const updated = projects.map(item => {
			const index = item.tasks.findIndex(el => el.id === task.id);

			if (index !== -1){
				item.tasks.splice(index, 1);
			}

			return item;
		});

		return updated.map(item => {
			if(item.id !== projectId) {
				return item;
			}

			item.tasks.push({id:task.id});
			return { ...item }
		});
	};

	const getUsers = (task) => {
		const userId = task.user.id;

		const updated = users.map(item => {
			const index = item.tasks.findIndex(el => el.id === task.id);

			if (index !== -1){
				item.tasks.splice(index, 1);
			}

			return item;
		});

		return updated.map(item => {
			if(item.id !== userId) {
				return item;
			}

			item.tasks.push({id:task.id});
			return { ...item }
		});
	};

	const handleEdit = (e) => {
		e.preventDefault();
		const _task = { ...task, ...formValues};
		_task.user = _task.user ? {id: _task.user} : null;
		_task.project = {id: _task.project};

		dispatch(editTask(_task));
		dispatch(updateProjects(getProjects(_task))); // update related project
		dispatch(updateUsers(getUsers(_task))); // update assigned user
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
		<form className="dialog-form" onSubmit={handleEdit}>
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
					disabled={invalid|| submitting}
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
	form: 'editTask',
	validate
})(Form);

export default connect(state => ({
	values: getFormValues("editTask")(state)
}))(Form);


