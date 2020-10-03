import './style.scss';
import React, { useState } from 'react';
import { List, Card, Descriptions, Button } from 'antd';

const View = ({ manageSortedAndFilteredContacts }) => {
	const [dataContactsState, setContactsState] = useState({
		sort: null,
		filter: null
	});

	const clearOptionsAndShowAllContacts = () => setContactsState({
		sort: null,
		filter: null
	});

	const sortAlphabet = () => {
		if (!dataContactsState.sort) {
			setContactsState({
				filter: null,
				sort: "aToZ",
			});
		} else if (dataContactsState.sort === "aToZ") {
			setContactsState({
				filter: null,
				sort: "zToA",
			});
		} else {
			clearOptionsAndShowAllContacts();
		}
	};

	const sortAlphabetDisabled = dataContactsState.sort === null && dataContactsState.filter !== null;

	const filterGender = () => {
		if (!dataContactsState.filter) {
			setContactsState({
				sort: null,
				filter: "male",
			});
		} else if (dataContactsState.filter === "male") {
			setContactsState({
				sort: null,
				filter: "female",
			});
		} else {
			clearOptionsAndShowAllContacts();
		}
	};

	const filterGenderDisabled = dataContactsState.sort || (
		dataContactsState.filter !== null
		&& (dataContactsState.filter !== "male" && dataContactsState.filter !== "female")
	);

	const filterNation = (filter) => {
		if (!dataContactsState.filter) {
			setContactsState({
				sort: null,
				filter,
			});
		} else if (dataContactsState.filter === filter) {
			clearOptionsAndShowAllContacts();
		}
	};

	const filterNationDisabled = dataContactsState.sort
		|| (dataContactsState.filter !== null && dataContactsState.filter.length !== 2);

	const filterName = (filter) => {
		if (dataContactsState.filter !== filter) {
			setContactsState({
				sort: null,
				filter,
			});
		} else {
			clearOptionsAndShowAllContacts();
		}
	};

    return (
		<div className="contacts-block-view">
			<Button
				disabled={filterGenderDisabled}
				onClick={() => filterGender()}
				className="key-btn"
			>Filter {
				dataContactsState.filter === 'male'
					? "Female"
					: !dataContactsState.filter
						? "gender"
						: dataContactsState.filter === "female"
							? "back"
							: "gender"
			}
			</Button>
			<Button
				disabled={sortAlphabetDisabled}
				onClick={() => sortAlphabet()}
				className="key-btn"
			>
				Sort by { dataContactsState.sort === 'aToZ' ? "Z -> A" : !dataContactsState.sort ? "A -> Z" : "back"}
			</Button>
			<List
				grid={{ gutter: 10, column: 4 }}
				pagination={{ pageSize: 8 }}
				dataSource={manageSortedAndFilteredContacts(dataContactsState)}
				renderItem={(item) => {
					// fix problem with key nat and name
					const { nat: nationality, name, ...otherItem } = item;
					item = { ...otherItem, nationality };

					const filterNameDisabled = dataContactsState.sort || (dataContactsState.filter && dataContactsState.filter !== name);

					return (
						<List.Item>
							<Card hoverable>
								<Descriptions title={name} column={1}>
									{Object.keys(item).slice(1).map((key) => (
										<Descriptions.Item
											key={item[key]}
											label={`${key[0].toUpperCase()}${key.slice(1)}`}
										>
											{item[key]}
										</Descriptions.Item>
									))}
								</Descriptions>
								<Button
									disabled={filterNameDisabled}
									onClick={() => filterName(name)}
									className="key-btn"
								>View {
									!dataContactsState.filter
										? "users only with this name"
										: dataContactsState.filter === name
											? "all users"
											: "users only with this name"
									}
								</Button>
								<Button
									onClick={() => filterNation(nationality)}
									disabled={filterNationDisabled}
									className="key-btn"
								>
									View {!dataContactsState.filter
										? `users only from ${nationality}`
										: dataContactsState.filter === item.nationality
											? "all users"
											: `users only from ${nationality}`
								}
								</Button>
							</Card>
						</List.Item>
					);
				}}
			/>
		</div>
	);
}

export {
	View
};
