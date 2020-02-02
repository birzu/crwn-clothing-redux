import { call, all, takeLatest, put } from 'redux-saga/effects';
import {
  loadMenuStart,
  loadMenuFinished,
  loadMenuFailed
} from '../reducers/menu.reducer';
import {
  firestore,
  extractFromQuerySnapshot
} from '../../firebase/firebase.utils';

// Workers
export function* loadMenuData() {
  try {
    const sectionsRef = yield firestore.collection('sections');
    const sectionsSnapshot = yield sectionsRef.get();
    const sections = yield call(extractFromQuerySnapshot, sectionsSnapshot);
    yield put(loadMenuFinished(sections));
  } catch (error) {
    yield put(loadMenuFailed(error));
  }
}

// Managers
export function* loadMenu() {
  yield takeLatest(loadMenuStart().type, loadMenuData);
}

// MENU SAGA
function* menuSagas() {
  yield all([call(loadMenu)]);
}

// DEFAULT EXPORT menuSagas generator fn
export default menuSagas;
