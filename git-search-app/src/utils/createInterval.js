const createInterval = ({ itemOffset, itemsPerPage, repos, totalRepos }) => {
	const fromCount = (itemOffset - 1) * itemsPerPage + 1;
	const toCount = (itemOffset - 1) * itemsPerPage + itemsPerPage - (itemsPerPage - repos.length);

	return `${fromCount}-${toCount} of ${totalRepos} items`;
};

export default createInterval;
