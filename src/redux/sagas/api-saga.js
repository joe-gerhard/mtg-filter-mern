import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH } from '../constants';

export default function* watcherSaga() {
  yield takeEvery(FETCH.SETS, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getSets);
    yield put({ type: "SETS_LOADED", payload })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e})
  }
}

function getSets() {
  return fetch("https://api.magicthegathering.io/v1/sets")
  .then(response => response.json());
}
