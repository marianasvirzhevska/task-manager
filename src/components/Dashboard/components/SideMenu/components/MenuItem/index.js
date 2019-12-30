import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './MenuItem.module.sass'

export const MenuItem = (props) => {
	const { path, active, icon, label, open } = props;
	const match = useRouteMatch({ path, exact: true });

	return (
		<li className={`${styles.menuItem} ${(match || active) ? styles.active : ''} ${!open ? styles.small : ''}`} title={label}>
			<Link to={path}>
				{icon}
				{open && <span>{label}</span>}
			</Link>
		</li>
	)
};

MenuItem.propTypes = {
	path: PropTypes.string.isRequired,
	icon: PropTypes.any.isRequired,
	label: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	active: PropTypes.func
};

export default MenuItem