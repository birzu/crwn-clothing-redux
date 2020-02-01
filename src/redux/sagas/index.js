import { call, all } from 'redux-saga/effects';
import menuSaga from './menu.sagas';

function* rootSaga() {
  yield all([call(menuSaga)]);
}

export default rootSaga;
