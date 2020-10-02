import { createReducer } from '../utils';
import {
	fetchUsersStarted,
	fetchedUsersSuccessfully,
	fetchUsersFailed,
	choicedViewOpened,
} from './actions';
import { saveChoicedContactsView } from 'services/contacts-view-service';

export const initialState = {
	users: [],
	tableView: true,
	error: null,
	size: 0,
};

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
		return state;
	},

	[fetchUsersStarted.type]: function (state, action) {
		return {
			...state,
			size: action.payload,
		};
	},

	[fetchedUsersSuccessfully.type]: function (state, action) {
		return {
			...state,
			users: action.payload,
			error: null,
		};
	},

	[fetchUsersFailed.type]: function (state, action) {
		return {
			...state,
			error: action.payload,
		};
	},

	[choicedViewOpened.type]: function (state, action) {
		saveChoicedContactsView(action.payload);
		return {
			...state,
			tableView: action.payload,
		};
	}
});
