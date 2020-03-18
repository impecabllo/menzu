import {
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  PROFILE_FETCHING
} from '../actions/actionTypes'
import { initialStateStatus } from '../utils/state'

const profileStore = {
  data: {},
  ...initialStateStatus
}

const userReducer = (state = profileStore, action) => {
  switch (action.type) {
    case PROFILE_FETCHING:
      return Object.assign({}, state, {
        data: {},
        state: {
          isFetching: true
        }
      })

    case PROFILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        state: {
          isFetching: false,
          isSuccess: true
        }
      })

    case PROFILE_FAILED:
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