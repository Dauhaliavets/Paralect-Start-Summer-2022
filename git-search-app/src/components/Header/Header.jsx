import React, { useState, useContext } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo-github.svg';
import Context from '../../context';

function Header() {
	const { setUser, setIsLoading, setIsReceived, setRepos } = useContext(Context);
	const [query, setQuery] = useState('');

	const onChange = (value) => {
		setQuery(value);
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		getUser(query);
	};

	const getUser = async (username) => {
		return await fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((response) => {
				console.log('response: ', response)
				setIsLoading(false);
				setIsReceived(true);
				setUser(response);

				getRepos(username)
			})
			.catch((error) => console.log('error: ', error));
	};

	const getRepos = async (username) => {
		return await fetch(`https://api.github.com/users/${username}/repos`)
			.then((response) => response.json())
			.then((response) => {
				console.log('response: ', response)
				setRepos(response);
			});
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
