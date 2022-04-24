import {
  LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  isAuthenticated: false,
  isLoading: false
}

/* eslint-disable */
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
      }
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        isLoading: false
      }
    default:
      return state
  }
}
