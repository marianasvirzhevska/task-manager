import React from 'react'
import PropTypes from 'prop-types'
import styles from './StatusLabel.module.sass'

const StatusLabel = (props) => {
	const { status } = props;

	return (
		<div className={styles.root}>
			<div className={`${styles.icon} ${styles[`icon-${status}`]}`}/>
			<p>{status}</p>
		</div>
	)
};

StatusLabel.propTypes = {
	status: PropTypes.oneOf(['InProgress', 'Pending', 'Done']).isRequired
};

export default StatusLabel;