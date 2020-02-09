import {
  SIGNIN_POST,
  SIGNUP_POST
} from './actionTypes'

export function postSignIn(payload) {
  return { type: SIGNIN_POST, payload }
}

export function postSignUp(payload) {
  return { type: SIGNUP_POST, payload }
}