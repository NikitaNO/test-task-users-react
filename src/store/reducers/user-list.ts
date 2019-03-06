export const GET_USERS = 'GET_USERS';

interface getUserListAction {
  type: typeof GET_USERS
  payload: object
}

type Action = getUserListAction

const initialState = {
  list: [],
};

export default function users(state = initialState, action: Action) {
  switch (action.type) {
    case GET_USERS:
      return state;
    default:
      return state
  }
}
