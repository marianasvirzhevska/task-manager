import React from 'react'
import Button from '@material-ui/core/Button'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { useDispatch, connect, useSelector } from "react-redux"

import trim from "../../../../../../utils/trim"
import { addUser } from "../../../../../../store/actions";
import Input from '../../../../../common/Input'
import CustomCheckbox from "../../../../../common/Checkbox"

let Form = (props) => {
	const { invalid, submitting, pristine, handleClose, users } = props;
	const formValues = useSelector(state => getFormValues('addUser')(state));
	const dispatch = useDispatch();

	const getUniqueID = (users) => {
		const getRandom = (min, max) =>{
			return Math.ceil(Math.random() * (max - min) + min);
		};

		function generateId(){
			let id = getRandom(0, users.length + 1);
			if (users && users.find( user => user.id === id)){
				id = generateId();
			} else
				return id;
		}

		return generateId();
	};

	const handleCreate = (e) => {
		e.preventDefault();
		let user = { ...formValues };
		user.id = users.length + 2; // TODO add id generator

		dispatch(addUser(user));
		handleClose();
	};

	return (
		<form className="dialog-form" onSubmit={handleCreate}>
			<div className="flexed-row">
				<Field component={Input}
					type="text"
				   	name="firstName"
					label="User Name"
					placeholder="Please enter"
				/>
			</div>
			<div className="flexed-row">
				<div className="half-column">
					<Field component={Input}
						type="text"
						name="lastName"
						label="User Surname"
					    placeholder="Please enter"
					/>
				</div>
				<div className="half-column">
					<Field component={Input}
						name="email"
						type="email"
						label="User Email"
						placeholder="Please enter"
					/>
				</div>
			</div>
			<div className="flexed-row">
				<Field component={CustomCheckbox} name="admin"
					   label='Administrator rights'
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

const validate = (_values, props) => {
	const users = props.users;
	const values = trim(_values);
	const errors = {};

	if(!values.firstName){
		errors.firstName='User Name field cannot be blank';
	}
	if(!values.lastName){
		errors.lastName='User Surname form field cannot be blank';
	}
	if (!values.email) {
		errors.email = 'E-mail field cannot be blank'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail is incorrect'
	}
	else if (isUniqueEmail(values.email, users)) {
		errors.email = 'Email already taken'
	}

	return errors;
};

const isUniqueEmail = (input, users) => {
	if (users && users.find( user => user.email === input)) {
			return (true);
		}
	return (false);
};

Form = reduxForm({
	form: 'addUser',
	validate
})(Form);

export default connect(state => ({
	values: getFormValues("addUser")(state)
}))(Form);

