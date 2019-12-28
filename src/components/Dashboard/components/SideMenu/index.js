import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../common/Button'
import { getMenuLinks } from './menuLinks'
import styles from './SideMenu.module.sass'
// import { UserMenu } from './components/UserMenu/UserMenu'
import MenuItem from './components/MenuItem'


export const SideMenu = () => {
	let open = true;
	let user = {
		admin: true,
		user_name: 'Oliver Brown',
		company_Name: 'Silver Post',
		email: 'admin.admin@mail.com'
	};
	let menuLinks = getMenuLinks(user);

	return (
		<div className={styles.sideMenu}>
			<div className={styles.menu}>
				{/*<UserMenu open={open} user={user}/>*/}
				<ul className={styles.menuList}>
					{
						menuLinks.map((item, key) => {
							return (
								<MenuItem
									key={key}
									path={item.path}
									label={item.label}
									menuIcon={item.icon}
									open={open}
								/>
							)
						})
					}
				</ul>

				<div className={`${styles.logoutBtn} ${!open ? styles.small : ''}`}>
					<Button variant="outlined" color="primary" handler={() => {}}>
						{/*<img src={logoutIcon} alt="logout"/>*/}
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


