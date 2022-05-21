import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InitialPage from './components/InitialPage/InitialPage';
import Main from './components/Main/Main';
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
				{!isReceived ? (
					<InitialPage />
				) : isLoading ? (
					<h1>Loading</h1>
				) : user.message ? (
					<h1>User not found</h1>
				) : (
					<Main />
				)}
			</Context.Provider>
		</div>
	);
}

export default App;
