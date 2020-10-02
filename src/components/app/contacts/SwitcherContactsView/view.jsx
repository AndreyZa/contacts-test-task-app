import './style.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BlockOutlined, TableOutlined, ReloadOutlined } from '@ant-design/icons';
import { fetchUsersStarted } from 'store/app/actions';
import { randomIntegerInRange } from 'utils';

const View = ({ tableView, choicedViewOpened, size }) => {

	const dispatch = useDispatch();
	const choiceTable = () => dispatch(choicedViewOpened(true));
	const choiceBlock = () => dispatch(choicedViewOpened(false));
	const updateData = () => dispatch(fetchUsersStarted(size ? size : randomIntegerInRange(100, 1000)));

	return (
		<div className="switcher-contacts-view">
			<TableOutlined onClick={choiceTable} className={ tableView ? "contacts-switcher-icon checked" : "contacts-switcher-icon" } />
			<BlockOutlined onClick={choiceBlock} className={ !tableView ? "contacts-switcher-icon checked" : "contacts-switcher-icon" } />
			<ReloadOutlined onClick={updateData} className="switcher-contacts-reload" />
		</div>
	);
};

export {
	View
};
