import { GET_USER_LIST_PENDING } from '../reducers/user';

export function getUserList() {
  return {
    type: GET_USER_LIST_PENDING,
  }
}
