import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from './menu.reducer';
import authReducer from './auth.reducer';
import shopReducer from './shop.reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  auth: authReducer,
  shop: shopReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

export default persistReducer(persistConfig, rootReducer);
