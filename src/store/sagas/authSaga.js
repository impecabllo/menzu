import {
  SIGNUP_POST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_FETCHING,
  SIGNIN_FAILED,
  SIGNIN_FETCHING,
  SIGNIN_SUCCESS,
  SIGNIN_POST
} from '../actions/actionTypes'
import { takeEvery, call, put } from 'redux-saga/effects'
import { apiPostSignUp, apiPostSignIn } from '../../api/apiClient'

export default function* authWatcherSaga() {
  yield takeEvery(SIGNIN_POST, postSignInSaga)
  yield takeEvery(SIGNUP_POST, postSignUpSaga)
}

function* postSignInSaga(data) {
  try {
    yield put({ type: SIGNIN_FETCHING })
    const payload = yield call(apiPostSignIn, data.payload)
    yield put({ type: SIGNIN_SUCCESS, payload })
  } catch (e) {
    yield put({ type: SIGNIN_FAILED, payload: e })
  }
}

function* postSignUpSaga(data) {
  try {
    yield put({ type: SIGNUP_FETCHING })
    const payload = yield call(apiPostSignUp, data.payload)
    yield put({ type: SIGNUP_SUCCESS, payload })
  } catch (e) {
    yield put({ type: SIGNUP_FAILED, payload: e })
  }
}