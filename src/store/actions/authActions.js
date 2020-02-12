import {
  SIGNIN_POST,
  SIGNUP_POST,
  USER_GET
} from './actionTypes'

export function postSignIn(payload) {
  return { type: SIGNIN_POST, payload }
}

export function postSignUp(payload) {
  return { type: SIGNUP_POST, payload }
}

export function getUser(payload) {
  return { type: USER_GET, payload }
}