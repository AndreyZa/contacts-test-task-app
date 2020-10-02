
const getUsers = async (range) => {
	const url = `${process.env.REACT_APP_API_URL}/api/?results=${range}`;

	return await fetch(url).then((res) => res.json());
};

export {
	getUsers
};
