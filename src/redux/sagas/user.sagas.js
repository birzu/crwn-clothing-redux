import { call, all, takeLatest, put } from 'redux-saga/effects';
import {
  userSigninGoogle,
  userSigninFailed,
  userSigninSuccess,
  userSignupFailed,
  userSignoutFailed,
  userSignoutSuccess,
  rehydrateUserSession
} from '../reducers/user.reducer';

import {
  getAuthProvider,
  auth,
  createUserProfile,
  checkUserSession
} from '../../firebase/firebase.utils';

// UTILS
export function* saveUser(user, data = {}) {
  const userRef = yield call(createUserProfile, user, data);
  const snapShot = yield userRef.get();
  yield put(userSigninSuccess(snapShot.data()));
}

// WORKERS
export function* userSigninWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(getAuthProvider());
    yield call(saveUser, user);
  } catch (error) {
    yield put(userSigninFailed(error));
  }
}

export function* userSigninWithEmailAndPassword({
  payload: { email, password }
}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(saveUser, user);
  } catch (error) {
    yield put(userSigninFailed(error));
  }
}

export function* userSignup({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(saveUser, user, { displayName });
  } catch (error) {
    yield put(userSignupFailed(error));
  }
}

export function* userSignout() {
  try {
    yield auth.signOut();
    yield put(userSignoutSuccess());
  } catch (error) {
    put(userSignoutFailed(error));
  }
}

export function* checkUserSessionPersistance() {
  try {
    const userAuth = yield checkUserSession();
    const userRef = yield call(createUserProfile, userAuth, {});
    const userSnapshot = yield userRef.get();
    yield put(rehydrateUserSession(userSnapshot.data()));
  } catch (error) {
    yield put(userSigninFailed(error));
  }
}

// MANAGERS
export function* userSigninWithGoogleInit() {
  yield takeLatest(userSigninGoogle().type, userSigninWithGoogle);
}

export function* userSigninEmailAndPasswordInit() {
  yield takeLatest('user/SIGNIN/EMAIL', userSigninWithEmailAndPassword);
}

export function* userSignupInit() {
  yield takeLatest('user/SIGNUP', userSignup);
}

export function* userSignoutInit() {
  yield takeLatest('user/SIGNOUT', userSignout);
}

export function* persistUser() {
  yield takeLatest('user/PERSIST', checkUserSessionPersistance);
}

// EXPORT
function* userSagas() {
  yield all([
    call(userSigninWithGoogleInit),
    call(userSigninEmailAndPasswordInit),
    call(userSignupInit),
    call(userSignoutInit),
    call(persistUser)
  ]);
}

export default userSagas;
