import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersStarted, openChoicedView } from 'store/app/actions';
import { randomIntegerInRange } from 'utils';
import { SwitcherContactsView } from 'components';

const View = ({ size }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		let sizeToFetch = !size ? randomIntegerInRange(100, 1000) : size;
		dispatch(fetchUsersStarted(sizeToFetch));
		dispatch(openChoicedView());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (<div className={'page page--contacts'}><SwitcherContactsView /></div>);
};

export { View };
