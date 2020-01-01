import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.sass'

const Input = ({input, label, type, placeholder, meta: { touched, error }}) => {
	return (
		<div className={styles.root}>
			<label>
				<p>{label}</p>
				<div className={styles.cover}>
					<input
						{...input} placeholder={placeholder} type={type}
					/>
				</div>
				{touched && ((error && <div className={styles.error}>{error}</div>))}
			</label>
		</div>
	)
}

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'file', 'date']).isRequired,
	placeholder: PropTypes.string
};

export default Input;