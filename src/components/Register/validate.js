
export default (_values) => {
	const values = _values.trim();
	const errors = {};

	if (!values.companyName) {
		errors.companyName = 'Company name field cannot be blank'
	}

	if (!values.firstName) {
		errors.firstName = 'First Name field cannot be blank'
	}

	if (!values.lastName) {
		errors.lastName = 'Last Name field cannot be blank'
	}
	if (!values.email) {
		errors.email = 'E-mail field cannot be blank'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail is incorrect'
	}

	if (!values.terms) {
		errors.terms = true
	}

	if (!values.password) {
		errors.password = 'Password field cannot be blank'
	} else if (values.password.length < 6) {
		errors.password = 'Password should contain at least 6 characters'
	}

	if (!values.passwordConfirm) {
		errors.passwordConfirm = 'Confirm your password correctly'
	} else if (values.passwordConfirm.length < 6) {
		errors.passwordConfirm = 'Confirm your password correctly'
	}

	if (values.passwordConfirm && values.password && values.passwordConfirm !== values.password) {
		errors.passwordConfirm = 'Confirm your password correctly'
	}
	return errors
}
