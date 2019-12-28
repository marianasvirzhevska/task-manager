import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.sass'

const CustomInput = ({type, label, name, placeholder, value, onChange}) => {
	return (
		<div className={styles.root}>
			<label>
				<p>{label}</p>
				<div className={styles.cover}>
					<input
						name={name}
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
				</div>
			</label>
		</div>
	)
}

CustomInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'file', 'date']).isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func
};

export default CustomInput;