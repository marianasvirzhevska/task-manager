import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import logoutIcon from '../../../../assets/icons/ico-logout.svg'
import { getMenuLinks } from './menuLinks'
import styles from './SideMenu.module.sass'
import { UserMenu } from './components/UserMenu' // access to user profile view and edit
import MenuItem from './components/MenuItem'

export const SideMenu = (props) => {
	const { open } = props;
	let user = {
		admin: true,
		firstName: 'Oliver',
		lastName: 'Brown',
		companyName: 'Silver Post',
		email: 'admin.admin@mail.com'
	};
	let menuLinks = getMenuLinks(user);

	return (
		<div className={styles.sideMenu}>
			<div className={styles.menu}>
				<UserMenu open={open} user={user}/>
				<ul className={styles.menuList}>
					{
						menuLinks.map((item, key) => {
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
					<Button  variant="outlined" color="primary" onClick={() => {}}>
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

