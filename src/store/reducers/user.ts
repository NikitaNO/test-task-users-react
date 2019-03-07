export const GET_USER_LIST = 'GET_USER_LIST';

interface getUserListAction {
  type: typeof GET_USER_LIST
  payload: object
}

const initialState = {
  list: [],
};

export default function users(state = initialState, action: getUserListAction) {
  switch (action.type) {
    case GET_USER_LIST:
      return state;
    default:
      return state
  }
}
