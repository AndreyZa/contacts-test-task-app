import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUsersStarted, fetchedUsersSuccessfully, fetchUsersFailed, openChoicedView, choicedViewOpened } from './app/actions';
import { getUsers, getContactsView } from 'services';

function* contactsSaga() {
	yield takeLatest(fetchUsersStarted.type, fetchUsersStartedSaga);
	yield takeLatest(openChoicedView.type, openChoicedViewSaga);
}

function* fetchUsersStartedSaga(fetchUsersStartedAction) {
	try {
		const users = yield call(getUsers, fetchUsersStartedAction.payload);

		if (users.results && users.results.length) {
			yield put(fetchedUsersSuccessfully(users.results));
		}
	} catch (e) {
		// todo error alert
		yield put(fetchUsersFailed(e.message));
	}
}

function* openChoicedViewSaga() {
	const view = yield getContactsView();
	yield put(choicedViewOpened(view));
}

export {
	contactsSaga,
}
