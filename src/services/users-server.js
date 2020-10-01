import { randomIntegerInRange } from 'utils';

const getUsers = async () => await fetch(process.env.REACT_APP_API_URL + `/api/?results=${randomIntegerInRange(100, 1000)}`).then((res) => res.json());

export {
	getUsers
};
