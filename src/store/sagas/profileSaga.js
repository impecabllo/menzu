import {
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  PROFILE_FETCHING,
  PROFILE_GET
} from '../actions/actionTypes'
import { takeEvery, call, put } from 'redux-saga/effects'
import { apiGetProfile } from '../../api/apiClient'

export default function* profileWatcherSaga() {
  yield takeEvery(PROFILE_GET, getProfileSaga)
}

function* getProfileSaga(data) {
  try {
    yield put({ type: PROFILE_FETCHING })
    const payload = yield call(apiGetProfile, data.payload)
    yield put({ type: PROFILE_SUCCESS, payload })
  } catch (e) {
    yield put({ type: PROFILE_FAILED, payload: e })
  }
}