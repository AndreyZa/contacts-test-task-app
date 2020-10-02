import './style.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BlockOutlined, TableOutlined } from '@ant-design/icons';

const View = ({ tableView, choicedViewOpened }) => {

	const dispatch = useDispatch();
	const choiceTable = () => dispatch(choicedViewOpened(true));
	const choiceBlock = () => dispatch(choicedViewOpened(false));

	return (
		<div className="switcher-contacts-view">
			<TableOutlined onClick={choiceTable} className={ tableView ? "contacts-switcher-icon checked" : "contacts-switcher-icon" } />
			<BlockOutlined onClick={choiceBlock} className={ !tableView ? "contacts-switcher-icon checked" : "contacts-switcher-icon" } />
		</div>
	);
};

export {
	View
};
