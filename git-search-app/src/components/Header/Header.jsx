import React, { useState, useContext } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo-github.svg';
import Context from '../../context';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchRepos from '../../hooks/useFetchRepos';

function Header() {
	const { setIsLoading } = useContext(Context);
	const [query, setQuery] = useState('');
	const { getUser } = useFetchUser();
	const { getRepos } = useFetchRepos();

	const onChange = (value) => {
		setQuery(value);
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		getUser(query);
		getRepos(query);
	};

	return (
		<header className={styles.header}>
			<div className={styles.header__inner_wrapper}>
				<div className={styles.header_logo}>
					<img src={logo} alt='logo' />
				</div>
				<form className={styles.form} onSubmit={handlerSubmit}>
					<div className={styles.search_icon}>
						<input
							className={styles.search_input}
							onChange={(e) => onChange(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</header>
	);
}

export default Header;
