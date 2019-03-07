import { call, put } from 'redux-saga/effects'
import { getUserListRequest } from 'src/helpers/api';

export function* fetchProducts() {
  try {
    yield put({ type: 'GET_USER_LIST_PENDING' });
    const users = yield call(getUserListRequest as any, '/products');
    yield put({ type: 'GET_USER_LIST_RESOLVED', users })
  } catch (e) {
    yield put({ type: 'GET_USER_LIST_REJECTED', e })
  }
}
