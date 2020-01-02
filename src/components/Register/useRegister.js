import { useState } from 'react';

const useRegisterForm = ( callback ) => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			callback()
		}
	};

	const handleInput = (e) => {
		setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
	};

	return {
		handleSubmit,
		handleInput,
		inputs
	};
};

export default useRegisterForm;