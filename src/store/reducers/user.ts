export const GET_USER_LIST_PENDING = 'GET_USER_LIST_PENDING';
export const GET_USER_LIST_RESOLVED = 'GET_USER_LIST_RESOLVED';
export const GET_USER_LIST_REJECTED = 'GET_USER_LIST_REJECTED';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_LIST_RESOLVED:
      return {
        ...state,
        isLoading: false,
        list: action.users.data,
      };

    case GET_USER_LIST_REJECTED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };

    default:
      return state
  }
}
