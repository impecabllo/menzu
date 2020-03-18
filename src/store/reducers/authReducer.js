import { combineReducers } from 'redux'
import {
  SIGNUP_FETCHING,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_FETCHING,
  SIGNIN_FAILED
} from '../actions/actionTypes'
import { initialStateStatus } from '../utils/state'

const authStore = {
  ...initialStateStatus
}

const signInReducer = (state = authStore, action) => {
  switch (action.type) {
    case SIGNIN_FETCHING:
      return Object.assign({}, state, {
        state: {
          isFetching: true
        }
      })

    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload)
      return Object.assign({}, state, {
        state: {
          isFetching: false,
          isSuccess: true
        }
      })

    case SIGNIN_FAILED:
      localStorage.removeItem('token')
      return Object.assign({}, state, {
        state: {
          isFetching: false,
          isSuccess: false
        }
      })

    default:
      return state
  }
}

const signUpReducer = (state = authStore, action) => {
  switch (action.type) {
    case SIGNUP_FETCHING:
      return Object.assign({}, state, {
        state: {
          isFetching: true
        }
      })

    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        state: {
          isFetching: false,
          isSuccess: true
        }
      })

    case SIGNUP_FAILED:
      return Object.assign({}, state, {
        state: {
          isFetching: false,
          isSuccess: false
        }
      })

    default:
      return state
  }
}

const authReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer
})

export default authReducer