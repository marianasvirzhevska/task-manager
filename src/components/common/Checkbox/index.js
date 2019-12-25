import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass'

const CustomCheckbox = ({label, name, value, onChange}) => {
	return (
		<div className="custom-checkbox">
			<label>
				<p>{label}</p>
				<input
					name={name}
					type='checkbox'
					value={value}
					onChange={onChange}
				/>
				<span className="checkmark"/>
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