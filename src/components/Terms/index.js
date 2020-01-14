import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import styles from './Terms.module.sass'
import {TermsContent} from './TermsContent'

const Terms = () => {
	return (
		<div className={styles.termsRoot}>
			<div className={styles.header}>
				<img src={logo} alt="logo"/>
				<Link to='/login'>Sign in</Link>
			</div>
			<div className={styles.container}>
				<h2 className={styles.title}>Terms and conditions</h2>
				<TermsContent />
			</div>
			<div className={styles.footer}>
				<div>
					<p>Copyright © 2020 Task Manage Software Tools</p>
					<p>Terms and conditions</p>
				</div>
			</div>
		</div>
	)
};

export default Terms;
