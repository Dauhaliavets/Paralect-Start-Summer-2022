import { useContext } from 'react';
import Context from '../context';

const useFetchUser = () => {
	const { setUser, setIsLoading, isReceived, setIsReceived } =
		useContext(Context);
	return {
		async getUser(username) {
			await fetch(`https://api.github.com/users/${username}`)
				.then((response) => response.json())
				.then((response) => {
					if (!isReceived) {
						setIsReceived(true);
					}
					setUser(response);
					setIsLoading(false);
				})
				.catch((error) => console.log('error: ', error));
		},
	};
};

export default useFetchUser;
