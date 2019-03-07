import { getUserListPending } from './user';
import { getTaskListPending } from './task';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    getUserListPending(),
    getTaskListPending(),
  ])
}
