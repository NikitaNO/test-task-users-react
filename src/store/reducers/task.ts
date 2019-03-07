export const GET_TASK_LIST_PENDING = 'GET_TASK_LIST_PENDING';
export const GET_TASK_LIST_RESOLVED = 'GET_TASK_LIST_RESOLVED';
export const GET_TASK_LIST_REJECTED = 'GET_TASK_LIST_REJECTED';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case GET_TASK_LIST_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TASK_LIST_RESOLVED:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };

    case GET_TASK_LIST_REJECTED:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };

    default:
      return state
  }
}
