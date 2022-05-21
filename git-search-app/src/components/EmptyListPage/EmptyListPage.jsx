import React from 'react';
import styles from './EmptyListPage.module.css';

function EmptyListPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.content__image}></div>
				<p className={styles.content__text}>Repository list is empty</p>
			</div>
		</div>
	)
}

export default EmptyListPage;
