import { createReducer } from '../utils';
import { OActionTypes } from './actions';

export const initialState = {
	users: [],
	tableView: true,
};

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
		return state;
	},
	[`${OActionTypes.prefix + OActionTypes.FETCHED_USERS_SUCCESSFULLY}`]: function (state, action) {
		return {
			...state,
			users: action.payload,
		};
	},
	[`${OActionTypes.prefix + OActionTypes.CHOICED_VIEW_OPENED}`]: function (state, action) {
		return {
			...state,
			tableView: action.payload,
		};
	}
});
