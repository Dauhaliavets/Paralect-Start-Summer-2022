import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Context from '../../context';
import EmptyListPage from '../EmptyListPage/EmptyListPage';
import RepoItem from '../RepoItem/RepoItem';
import styles from './ListRepos.module.css';

function Items({ currentItems }) {
	return (
		<>
			{currentItems &&
				currentItems.map((repo, ind) => (
					<RepoItem
						key={ind + 1}
						url={repo.html_url}
						name={repo.name}
						description={repo.description}
					/>
				))}
		</>
	);
}

function PaginatedInterval({
	itemOffset,
	itemsPerPage,
	currentItems,
	totalRepos,
}) {
	const fromCount = (itemOffset - 1) * itemsPerPage + 1;
	const toCount =
		(itemOffset - 1) * itemsPerPage +
		itemsPerPage -
		(itemsPerPage - currentItems.length);

	return (
		<span
			className={styles.paginated__interval}
		>{`${fromCount}-${toCount} of ${totalRepos} items`}</span>
	);
}

function PaginatedItems({ itemsPerPage, totalRepos, username, repos }) {
	const [currentItems, setCurrentItems] = useState(repos);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(1);

	useEffect(() => {
		setPageCount(Math.ceil(totalRepos / itemsPerPage));
		getRepos(username, itemsPerPage, itemOffset);
	}, [itemOffset]);

	const handlePageClick = (event) => {
		setItemOffset(event.selected + 1);
	};

	const getRepos = async (username, per_page, page) => {
		return await fetch(
			`https://api.github.com/users/${username}/repos?per_page=${per_page}&page=${page}`
		)
			.then((response) => response.json())
			.then((response) => setCurrentItems(response));
	};

	return (
		<>
			<Items currentItems={currentItems} />
			<div className={styles.pagination__container}>
				<PaginatedInterval
					itemOffset={itemOffset}
					itemsPerPage={itemsPerPage}
					currentItems={currentItems}
					totalRepos={totalRepos}
				/>
				<ReactPaginate
					breakLabel='...'
					breakClassName={styles.btn__break}
					nextLabel=''
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					pageCount={pageCount}
					previousLabel=''
					renderOnZeroPageCount={null}
					containerClassName={styles.btns__container}
					pageClassName={styles.btns}
					activeClassName={styles.btn__active}
					previousClassName={styles.arrow__prev}
					nextClassName={styles.arrow__next}
					disabledClassName={styles.arrow__disabled}
				/>
			</div>
		</>
	);
}

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
