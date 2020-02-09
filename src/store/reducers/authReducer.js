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

const signInStore = {
  token: '',
  ...initialStateStatus
}

const signUpStore = {
  token: '',
  ...initialStateStatus
}

const signInReducer = (state = signInStore, action) => {
  switch (action.type) {
    case SIGNIN_FETCHING:
      return Object.assign({}, state, {
        token: '',
        state: {
          isFetching: true
        }
      })

    case SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.payload,
        state: {
          isFetching: false,
          isSuccess: true
        }
      })

    case SIGNIN_FAILED:
      return Object.assign({}, state, {
        token: '',
        state: {
          isFetching: false,
          isSuccess: false
        }
      })

    default:
      return state
  }
}

const signUpReducer = (state = signUpStore, action) => {
  switch (action.type) {
    case SIGNUP_FETCHING:
      return Object.assign({}, state, {
        token: '',
        state: {
          isFetching: true
        }
      })

    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        token: action.payload,
        state: {
          isFetching: false,
          isSuccess: true
        }
      })

    case SIGNUP_FAILED:
      return Object.assign({}, state, {
        token: '',
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