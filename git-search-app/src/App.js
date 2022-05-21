import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InitialPage from './components/InitialPage/InitialPage';
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Context from './context';

function App() {
	const [user, setUser] = useState(null);
	const [repos, setRepos] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isReceived, setIsReceived] = useState(false);

	return (
		<div className='App'>
			<Context.Provider
				value={{
					user,
					setUser,
					isLoading,
					setIsLoading,
					isReceived,
					setIsReceived,
					repos,
					setRepos,
				}}
			>
				<Header />
				{isLoading ? (
					<Loader />
				) : !isReceived ? (
					<InitialPage />
				) : user.message ? (
					<NotFoundPage />
				) : (
					<Main />
				)}
			</Context.Provider>
		</div>
	);
}

export default App;
