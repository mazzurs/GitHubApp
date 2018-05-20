import {
  GET_USERS,
} from '../constants/constants'

let initialState = {
  users: []
}

export default function usersReducer (state = initialState, action) {

  switch (action.type) {

    case GET_USERS:
      return {
        ...state,
        users: action.users
      }

    default:
      return state
  }
}