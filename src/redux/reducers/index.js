import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from './menu.reducer';

const rootReducer = combineReducers({
  menu: menuReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

export default persistReducer(persistConfig, rootReducer);
