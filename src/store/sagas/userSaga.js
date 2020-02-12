import {
  USER_FAILED,
  USER_SUCCESS,
  USER_FETCHING,
  USER_GET
} from '../actions/actionTypes'
import { takeEvery, call, put } from 'redux-saga/effects'
import { apiGetUser } from '../../api/apiClient'

export default function* userWatcherSaga() {
  yield takeEvery(USER_GET, getUserSaga)
}

function* getUserSaga(data) {
  try {
    yield put({ type: USER_FETCHING })
    const payload = yield call(apiGetUser, data.payload)
    yield put({ type: USER_SUCCESS, payload })
  } catch (e) {
    yield put({ type: USER_FAILED, payload: e })
  }
}