import React from 'react';
import styles from './InitialPage.module.css';

function InitialPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.content__image}></div>
				<p className={styles.content__text}>Start with searching a GitHub user</p>
			</div>
		</div>
	)
}

export default InitialPage;
