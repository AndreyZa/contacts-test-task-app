
export const simplContact = ({ name, dob, nat, email, phone, location, gender, picture }, index) => {

	const { country, street, city, state, postcode } = location;
	const birthDate = new Date(dob.date);
	const birth = `${birthDate.getMonth() + 1}/${birthDate.getDate()}/${birthDate.getFullYear()}`;

	const address = `${country}, ${street.number} ${street.name} - ${city}, ${state}, ${postcode}`;

	return {
		key: String(index),
		name: `${name.first} ${name.last}`,
		age: dob.age,
		birth,
		nat,
		email,
		phone,
		address,
		gender,
	}
};
