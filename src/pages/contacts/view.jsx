import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { fetchUsersStarted, openChoicedView } from 'store/app/actions';
import { randomIntegerInRange } from 'utils';
import { SwitcherContactsView, ContactsTableView, ContactsBlockView } from 'components';

const View = ({ size, tableView, error }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		let sizeToFetch = !size ? randomIntegerInRange(100, 1000) : size;
		dispatch(fetchUsersStarted(sizeToFetch));
		dispatch(openChoicedView());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (error) {
			message.error(error);
		}
	}, [error]);

	return (
		<div className={'page page--contacts'}>
			<SwitcherContactsView />
			{tableView ? <ContactsTableView /> : <ContactsBlockView />}
		</div>
	);
};

export { View };
