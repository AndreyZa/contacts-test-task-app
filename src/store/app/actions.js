import { createAction } from '../utils';

export const OActionTypes = {
	prefix: '@app',
	FETCH_USERS_STARTED: '/FETCH_USERS_STARTED',
	FETCHED_USERS_SUCCESSFULLY: '/FETCHED_USERS_SUCCESSFULLY',
	OPEN_CHOICED_VIEW: '/OPEN_CHOICED_VIEW',
	CHOICED_VIEW_OPENED: '/CHOICED_VIEW_OPENED',
};

const fetchUsersStarted = createAction(OActionTypes.prefix + OActionTypes.FETCH_USERS_STARTED);
const fetchUsersSuccessfully = createAction(OActionTypes.prefix + OActionTypes.FETCHED_USERS_SUCCESSFULLY);
const openChoicedView = createAction(OActionTypes.prefix + OActionTypes.OPEN_CHOICED_VIEW);
const choicedViewOpened = createAction(OActionTypes.prefix + OActionTypes.CHOICED_VIEW_OPENED);

export {
	fetchUsersStarted,
	fetchUsersSuccessfully,
	openChoicedView,
	choicedViewOpened,
};
