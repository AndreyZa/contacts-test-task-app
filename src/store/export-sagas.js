import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUsersStarted, fetchUsersSuccessfully, openChoicedView, choicedViewOpened } from './app/actions';
import { getUsers, getContactsView } from 'services';

function* contactsSaga() {
	yield takeLatest(fetchUsersStarted.type, fetchUsersStartedSaga);
	yield takeLatest(openChoicedView.type, openChoicedViewSaga);
}

function* fetchUsersStartedSaga() {
	try {
		const users = yield call(getUsers);

		if (users.results && users.results.length) {
			yield put(fetchUsersSuccessfully(users.results));
		}
	} catch (e) {
		// todo FAILED ACTION
		console.log("FAILED getUsers", e);
	}
}

function* openChoicedViewSaga() {
	const view = yield getContactsView();
	yield put(choicedViewOpened(view));
}

export {
	contactsSaga,
}
