import React, { useContext } from 'react';
import Context from '../../context';
import styles from './UserInfo.module.css';
import transformCountFollow from '../../utils/transformCountFollow';

function UserInfo() {
	const { user } = useContext(Context);

	return (
		<section className={styles.user__info}>
			<div className={styles.user__avatar}>
				<img className={styles.avatar} src={user.avatar_url} />
			</div>
			<h3 className={styles.name}>{user.name}</h3>
			<h4 className={styles.login}>
				<a className={styles.login__link} href={user.html_url} target='_blank'>
					{user.login}
				</a>
			</h4>
			<div className={styles.follow}>
				<span className={styles.followers}>{transformCountFollow(user.followers)} followers</span>
				<span className={styles.following}>{transformCountFollow(user.following)} following</span>
			</div>
		</section>
	);
}

export default UserInfo;
