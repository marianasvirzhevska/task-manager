import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import styles from './UserMenu.module.sass'
import img from '../../../../../../assets/images/bg.jpg' //temp var to display user img

export const UserMenu = (props) => {
  const { open, user } = props;

  return (
    <div className={styles.userMenu}>
      <div className={styles.userAvatar}>
        {/* Avatar image should be replaced with actual logo or user image */}
        <Avatar src={img} alt="image"/>
      </div>
      {open &&
      <Link to="/dashboard/settings" className={styles.title}>
        {user.admin ? (
          <div>
            {user.firstName} {user.lastName}
          </div>
        ) : (
          <div>{user.companyName}</div>
        )}

        {user.admin ? (
          <div>Admin</div>
        ) : (
          <div>
            {user.firstName} {user.lastName}
          </div>
        )}
      </Link>
      }
    </div>
  )
};

UserMenu.propTypes = {
	user: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired
};


