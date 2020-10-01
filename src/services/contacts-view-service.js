

const getContactsView = () => {
	let view = localStorage.getItem(process.env.REACT_APP_API_CONTACTS_SEED_KEY);

	if (!view) {
		view = '{"tableView": true}';
		localStorage.setItem(process.env.REACT_APP_API_CONTACTS_SEED_KEY, view);
	}

	return JSON.parse(view).tableView;
};

const saveChoicedContactsView = (choicedView) => localStorage.setItem(process.env.REACT_APP_API_CONTACTS_SEED_KEY, `{"tableView": ${choicedView}}`);

export {
	getContactsView,
	saveChoicedContactsView,
};
