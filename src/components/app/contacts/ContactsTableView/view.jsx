import React, { useMemo } from 'react';
import { Table } from 'antd';

const View = ({ contacts }) => {
	console.log("ccc", contacts);

	const [nameFilters, natFilters] = useMemo(() => {

		const nameFilters = contacts.map(({ name }) => {
			const fullName = `${name.first} ${name.last}`;
			return {
				text: fullName,
				value: fullName,
			};
		});


		const nationalities = [];
		contacts.forEach(({ nat }) => {
			const values = nationalities.map(({ value }) => value);
			if (!values.includes(nat)) {
				nationalities.push({
					text: nat,
					value: nat,
				});
			}
		});

		return [nameFilters, nationalities];
	}, [contacts]);

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			filters: nameFilters,
			onFilter(value, record) {
				return record.name === value;
			},
			sorter(a, b, order) {
				if (a.name < b.name) {
					return -1;
				} else if (a.name > b.name) {
					return 1;
				} else {
					return 0;
				}
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: 'Birthday',
			dataIndex: 'birth',
			key: 'birth'
		},
		{
			title: 'Nationality',
			dataIndex: 'nat',
			key: 'nat',
			filters: natFilters,
			onFilter(value, record) {
				return record.nat === value;
			}
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email'
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			key: 'gender',
			filters: [
				{
					text: 'Male',
					value: 'male',
				},
				{
					text: 'Female',
					value: 'female',
				}
			],
			onFilter(value, record) {
				return record.gender === value;
			}
		},
	];

	const toColumnsFormatCallback = ({ name, dob, nat, email, phone, location, gender }, index) => {

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

	return (
		<div className="contacts-table-view">ContactsTable;
			<Table dataSource={contacts.map(toColumnsFormatCallback)}  columns={columns} />
		</div>
	);
};

export {
	View
};
