import React, { useContext } from 'react';
import Context from '../../context';
import EmptyListPage from '../EmptyListPage/EmptyListPage';
import RepoItem from '../RepoItem/RepoItem';
import styles from './ListRepos.module.css';

function ListRepos() {
	const { repos } = useContext(Context);

	return (
		<section className={styles.user_repositories}>
			{repos?.length ? (
				<div className={styles.repositories_list}>
					<p>Repositories ({repos?.length})</p>
					{repos &&
						repos.map((repo, ind) => (
							<RepoItem
								key={ind + 1}
								url={repo.html_url}
								name={repo.name}
								description={repo.description}
							/>
						))}
				</div>
			) : (
				<EmptyListPage />
			)}
		</section>
	);
}

export default ListRepos;
