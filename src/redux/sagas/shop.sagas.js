import { call, all, put, takeLatest } from 'redux-saga/effects';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailed
} from '../reducers/shop.reducer';

import {
  firestore,
  addItemsToCollectionsMap
} from '../../firebase/firebase.utils';

// Workers
export function* fetchCollectionsData() {
  try {
    const collectionsRef = yield firestore.collection('inventory').get();
    const collections = yield call(addItemsToCollectionsMap, collectionsRef);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailed(error));
  }
}

// Managers
export function* fetchCollections() {
  yield takeLatest(fetchCollectionsStart().type, fetchCollectionsData);
}

// shopSaga
function* shopSagas() {
  yield all([call(fetchCollections)]);
}

export default shopSagas;
