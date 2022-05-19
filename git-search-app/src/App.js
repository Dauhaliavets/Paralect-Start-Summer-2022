import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
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
					<h1>Start with searching a GitHub user</h1>
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
