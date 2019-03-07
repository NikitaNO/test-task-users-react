import { call, put, takeEvery } from 'redux-saga/effects'
import { getTaskListRequest } from 'src/helpers/api';
import { GET_TASK_LIST_PENDING, GET_TASK_LIST_REJECTED, GET_TASK_LIST_RESOLVED } from '../reducers/task';

function* getTaskList() {
  try {
    const users = yield call(getTaskListRequest);
    console.log(users)
    yield put({ type: GET_TASK_LIST_RESOLVED, users })
  } catch (e) {
    yield put({ type: GET_TASK_LIST_REJECTED, e })
  }
}

export function* getTaskListPending() {
  yield takeEvery(GET_TASK_LIST_PENDING, getTaskList)
}
