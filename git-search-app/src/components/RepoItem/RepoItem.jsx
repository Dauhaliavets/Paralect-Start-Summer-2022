import React from 'react';
import styles from './RepoItem.module.css';

function RepoItem({url, name, description}) {
	return (
		<div className={styles.repo_item}>
			<a className={styles.repo_link} href={url} target="_blank">
				{name}
			</a>
			<p className={styles.repo_description}>{description}</p>
		</div>
	);
}

export default RepoItem;
