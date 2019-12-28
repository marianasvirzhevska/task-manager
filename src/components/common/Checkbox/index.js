import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.sass'

const CustomCheckbox = ({label, name, value, onChange}) => {
	return (
		<div className={styles.root}>
			<label>
				<p>{label}</p>
				<input
					name={name}
					type='checkbox'
					value={value}
					onChange={onChange}
				/>
				<span className={styles.checkMark}/>
			</label>
		</div>
	)
}

CustomCheckbox.propTypes = {
	label: PropTypes.any,
	name: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func
};

export default CustomCheckbox;