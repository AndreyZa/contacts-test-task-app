import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUsersStarted, fetchUsersSuccessfully, openChoicedView } from './app/actions';
import { getUsers } from 'services';

function* contactsSaga() {
	yield takeLatest(fetchUsersStarted.type, fetchUsersStartedSaga);
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

export {
	contactsSaga,
}
