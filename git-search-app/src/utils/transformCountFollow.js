const transformCountFollow = (count) => {
	if(count < 1000) {
		return count;
	} else if (count < 1000000) {
		const newValue = Math.round(count / 1000).toFixed(1);
		return `${newValue}k`;
	} else {
		const newValue = Math.round(count / 1000000).toFixed(1);
		return `${newValue}m`;
	}
}

export default transformCountFollow;