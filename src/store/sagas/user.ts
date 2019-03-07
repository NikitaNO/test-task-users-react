import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserListRequest } from 'src/helpers/api';
import { GET_USER_LIST_PENDING, GET_USER_LIST_RESOLVED, GET_USER_LIST_REJECTED } from '../reducers/user';

function* getUserList() {
  try {
    const users = yield call(getUserListRequest);
    yield put({ type: GET_USER_LIST_RESOLVED, users })
  } catch (e) {
    yield put({ type: GET_USER_LIST_REJECTED, e })
  }
}

export function* getUserListPending() {
  yield takeEvery(GET_USER_LIST_PENDING, getUserList)
}
