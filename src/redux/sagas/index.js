import { call, all } from 'redux-saga/effects';
import menuSagas from './menu.sagas';
import shopSagas from './shop.sagas';
import userSagas from './user.sagas';

function* rootSaga() {
  yield all([call(menuSagas), call(shopSagas), call(userSagas)]);
}

export default rootSaga;
