import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH } from '../constants';

const url = 'https://api.magicthegathering.io/v1/';

export default function* rootSaga() {
  yield takeEvery(FETCH.SETS, fetchSets);
  yield takeEvery(FETCH.CARDS, fetchCards)
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
  return fetch("https://api.magicthegathering.io/v1/sets")
  .then(response => response.json());
}


async function getCards(activeSet) {
  const resultArr = await axios.all([
    axios.get(url + "/cards", {
      params: {
        set: activeSet,
        page: 1
      }
    }),
    axios.get(url + "/cards", {
      params: {
        set: activeSet,
        page: 2
      }
    }),
    axios.get(url + "/cards", {
      params: {
        set: activeSet,
        page: 3
      }
    }),
    axios.get(url + "/cards", {
      params: {
        set: activeSet,
        page: 4
      }
    }),
    axios.get(url + "/cards", {
      params: {
        set: activeSet,
        page: 5
      }
    })
  ]);

  let combinedResults = [];

  resultArr.forEach(result => {
    combinedResults = [...combinedResults, ...result.data.cards];
  });
  combinedResults = combinedResults.filter(card => {
    return (
      card.imageUrl &&
      !card.type.includes("Adventure") &&
      !card.type.includes("Basic Land")
    );
  });

  return combinedResults;
}