import React, { useMemo } from 'react';
import { Table, Row, Col, Card, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const View = ({ contacts }) => {
	const [nameFilters, natFilters, males, females, it] = useMemo(() => {

		const nameFilters = contacts.map(({ name }) => {
			const fullName = `${name.first} ${name.last}`;
			return {
				text: fullName,
				value: fullName,
			};
		});

		const allMales = contacts.filter(({ gender }) => gender === 'male').length;
		const allFemales = contacts.filter(({ gender }) => gender === 'female').length;
		const withOutGender = contacts.filter(({ gender }) => gender !== 'male' && gender !== 'female').length;

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

		return [nameFilters, nationalities, allMales, allFemales, withOutGender];
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
			<Row>
				<Col>
					<Card>
						<Statistic
							title="All"
							value={contacts.length}
							suffix=" users"
						/>
					</Card>
				</Col>
				<Col>
					<Card>
						<Statistic
							title="Male"
							value={males}
							valueStyle={{ color: males > females ? '#3f8600' : '#cf1322'}}
							prefix={ males > females ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
							suffix=" mens"
						/>
					</Card>
				</Col>
				<Col>
					<Card>
						<Statistic
							title="Female"
							value={females}
							valueStyle={{ color: males < females ? '#3f8600' : '#cf1322'}}
							prefix={males < females ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
							suffix=" womans"
						/>
					</Card>
				</Col>
				<Col>
					<Card>
						<Statistic
							title="Users who did not choice gender"
							value={it}
							suffix=" without gender"
						/>
					</Card>
				</Col>
			</Row>
			<Row style={{ marginTop: 20, }}>
				{natFilters.map(({ value }) => {
					const natValue = contacts.filter(({ nat }) => nat === value).length;
					return (
						<Col style={{ marginTop: 10 }}>
							<Card>
								<Statistic
									title={value}
									value={natValue}
									suffix={` ${value} users`}
								/>
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export {
	View
};
