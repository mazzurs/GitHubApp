import {
  GET_USERS
} from '../constants/constants'

export function getUsers (payload) {
  return (dispatch) => {
    dispatch({
      type: GET_USERS,
      users: payload.users
    })
  }
}