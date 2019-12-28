import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './MenuItem.module.sass'

export const MenuItem = (props) => {
	const { path, active, menuIcon, label, open } = props;
	const match = useRouteMatch({ path, exact: true });

	return (
		<li className={`${styles.menuItem} ${(match || active) ? styles.active : ''}`} title={label}>
			<Link to={path}>
				{/*<img src={menuIcon} alt="menuIcon"/>*/}
				{open && <span>{label}</span>}
			</Link>
		</li>
	)
};

MenuItem.propTypes = {
	path: PropTypes.string.isRequired,
	menuIcon: PropTypes.any,
	label: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	active: PropTypes.func
};

export default MenuItem