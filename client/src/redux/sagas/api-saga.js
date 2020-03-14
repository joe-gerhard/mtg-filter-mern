import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH } from '../constants';

export default function* rootSaga() {
  yield takeEvery(FETCH.SETS, fetchSets);
  yield takeEvery(FETCH.CARDS, fetchCards);
}

function* fetchSets() {
  try {
    const payload = yield call(getSets);
    yield put({ type: "SETS_LOADED", payload })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e})
  }
}

function* fetchCards(action) {
  try {
    const payload = yield call(getCards, action.payload);
    yield put({ type: "CARDS_LOADED", payload })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }
}

function getSets() {
  return axios.get("/sets")
  .then(response => response.json());
}


async function getCards(activeSet) {
  let results = await axios.get(`/cards/${activeSet}`);
  results = results.filter(card => {
    return (
      card.imageUrl &&
      !card.type.includes("Adventure") &&
      !card.type.includes("Basic Land")
    );
  });
  
  return results;
}