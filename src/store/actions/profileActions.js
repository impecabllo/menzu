import {
  PROFILE_GET
} from './actionTypes'

export function getProfile(payload) {
  return { type: PROFILE_GET, payload }
}