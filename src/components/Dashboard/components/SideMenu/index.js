import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import logoutIcon from '../../../../assets/icons/ico-logout.svg'
import { getMenuLinks } from './menuLinks'
import styles from './SideMenu.module.sass'
import { UserMenu } from './components/UserMenu' // access to user profile view and edit
import MenuItem from './components/MenuItem'
import { LOGOUT } from "../../../../store/constants"

export const SideMenu = (props) => {
	const { open } = props;
	const user = useSelector(state => state.auth.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch({type: LOGOUT});
		history.push("/login");
	};

	return (
		<div className={styles.sideMenu}>
			<div className={styles.menu}>
				<UserMenu open={open} user={user}/>
				<ul className={styles.menuList}>
					{
						getMenuLinks(user).map((item, key) => {
							return (
								<MenuItem
									key={key}
									path={item.path}
									label={item.label}
									icon={item.icon}
									open={open}
								/>
							)
						})
					}
				</ul>

				<div className={`${styles.logoutBtn} ${!open ? styles.small : ''}`}>
					<Button  variant="outlined" color="primary" onClick={handleLogout}>
						<img src={logoutIcon} alt="logout"/>
						{open && <span>Logout</span>}
					</Button>
				</div>
				{
					open &&
					<div className={styles.terms}>
						<p>Copyright © 2020 Task Manage Software Tools</p>
						<Link to='/'>Terms and conditions</Link>
					</div>
				}
			</div>
		</div>
	)
};


