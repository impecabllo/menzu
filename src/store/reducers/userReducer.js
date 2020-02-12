import {
  USER_FETCHING,
  USER_FAILED,
  USER_SUCCESS
} from '../actions/actionTypes'
import { initialStateStatus } from '../utils/state'

const userStore = {
  data: {},
  ...initialStateStatus
}

const userReducer = (state = userStore, action) => {
  switch (action.type) {
    case USER_FETCHING:
      return Object.assign({}, state, {
        data: {},
        state: {
          isFetching: true
        }
      })

    case USER_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        state: {
          isFetching: false,
          isSuccess: true
        }
      })

    case USER_FAILED:
      return Object.assign({}, state, {
        data: {},
        state: {
          isFetching: false,
          isSuccess: false
        }
      })

    default:
      return state
  }
}

export default userReducer