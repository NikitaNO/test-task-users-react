export const GET_TASK_LIST = 'GET_TASK_LIST';

interface getUserListAction {
  type: typeof GET_TASK_LIST
  payload: object
}

const initialState = {
  list: [],
};

export default function tasks(state = initialState, action: getUserListAction) {
  switch (action.type) {
    case GET_TASK_LIST:
      return state;
    default:
      return state
  }
}
