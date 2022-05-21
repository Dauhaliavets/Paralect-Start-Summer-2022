import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import useFetchRepos from '../../hooks/useFetchRepos';
import RepoItem from '../RepoItem/RepoItem';
import createInterval from '../../utils/createInterval';
import styles from './PaginatedItems.module.css';


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

function PaginatedInterval({requiredValues}) {
	const interval = createInterval(requiredValues);
	return <span className={styles.paginated__interval}>{interval}</span>;
}

function PaginatedItems({ itemsPerPage, totalRepos, username, repos }) {
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(1);
	const { getRepos } = useFetchRepos();

	useEffect(() => {
		setPageCount(Math.ceil(totalRepos / itemsPerPage));
		getRepos(username, itemsPerPage, itemOffset);
	}, [getRepos, itemsPerPage, totalRepos, username, itemOffset]);

	const handlePageClick = (event) => {
		setItemOffset(event.selected + 1);
	};

	return (
		<>
			<Items currentItems={repos} />
			<div className={styles.pagination__container}>
				<PaginatedInterval
					requiredValues={{itemOffset, itemsPerPage, repos, totalRepos}}
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

export default PaginatedItems;