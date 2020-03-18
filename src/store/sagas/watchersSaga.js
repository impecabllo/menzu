import { all, fork } from 'redux-saga/effects'

import profileSaga from './profileSaga'
import authSaga from './authSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    fork(profileSaga),
    fork(authSaga),
    fork(userSaga)
  ])
}