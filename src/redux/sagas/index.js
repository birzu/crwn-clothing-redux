import { call, all } from 'redux-saga/effects';
import menuSagas from './menu.sagas';
import shopSagas from './shop.sagas';

function* rootSaga() {
  yield all([call(menuSagas), call(shopSagas)]);
}

export default rootSaga;
