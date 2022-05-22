import { useContext } from 'react';
import Context from '../context';

const useFetchRepos = () => {
	const { setRepos } = useContext(Context);
	return {
		async getRepos(username, perPage = 4, page = 1) {
			return await fetch(
				`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
			)
				.then((response) => response.json())
				.then((response) => {
					setRepos(response);
				})
				.catch((error) => console.log('error: ', error));
		},
	};
};

export default useFetchRepos;
