import React, { useContext } from 'react';
import Context from '../../context';
import EmptyListPage from '../EmptyListPage/EmptyListPage';
import RepoItem from '../RepoItem/RepoItem';
import styles from './ListRepos.module.css';

function ListRepos() {
	const { repos } = useContext(Context);

	console.log('repos: ', repos)

	return (
		<section className={styles.user_repositories}>
			{!repos.length ? (
				<EmptyListPage />
			) : (
				<div className={styles.repositories_list}>
					<p>Repositories ({repos?.length})</p>
					{repos &&
						repos.map((repo) => (
							<RepoItem
								url={repo.html_url}
								name={repo.name}
								description={repo.description}
							/>
						))}
				</div>
			)}
		</section>
	);
}

export default ListRepos;
