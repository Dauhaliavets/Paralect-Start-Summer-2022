import React from 'react';
import ListRepos from '../ListRepos/ListRepos';
import UserInfo from '../UserInfo/UserInfo';
import styles from './Main.module.css';

function Main() {
	return (
		<div className={styles.main}>
			<UserInfo />
			<ListRepos />
		</div>
	);
}

export default Main;
