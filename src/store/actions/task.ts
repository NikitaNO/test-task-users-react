import { GET_TASK_LIST_PENDING } from '../reducers/task';

export function getTaskList() {
  return {
    type: GET_TASK_LIST_PENDING,
  }
}
