import React, { useContext } from 'react';
import Context from '../../context';
import EmptyListPage from '../EmptyListPage/EmptyListPage';
import PaginatedItems from '../PaginatedItems/PaginatedItems';
import styles from './ListRepos.module.css';

function ListRepos() {
	const { user, repos, setRepos } = useContext(Context);

	return (
		<section className={styles.user_repositories}>
			{repos?.length ? (
				<div>
					<div className={styles.repositories_list}>
						<p>Repositories ({user.public_repos})</p>
						{repos && (
							<PaginatedItems
								itemsPerPage={4}
								totalRepos={user.public_repos}
								username={user.login}
								repos={repos}
								setRepos={setRepos}
							/>
						)}
					</div>
				</div>
			) : (
				<EmptyListPage />
			)}
		</section>
	);
}

export default ListRepos;
