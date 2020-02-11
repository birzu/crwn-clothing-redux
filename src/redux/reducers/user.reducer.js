// INITIAL STATE
const INITIAL_STATE = {
  currentUser: null,
  error: undefined,
  loading: false
};

// ACTION CREATORS
export const userSigninGoogle = () => ({
  type: 'user/SIGNIN/GOOGLE'
});

export const userSigninEmailAndPassword = credentials => ({
  type: 'user/SIGNIN/EMAIL',
  payload: credentials
});

export const userSigninSuccess = user => ({
  type: 'user/SIGNIN/SUCCESS',
  payload: user
});

export const userSigninFailed = error => ({
  type: 'user/SIGNIN/FAILED',
  payload: error
});

export const userSignup = credentials => ({
  type: 'user/SIGNUP',
  payload: credentials
});

export const userSignupSuccess = () => ({
  type: 'user/SIGNUP/SUCCESS'
});

export const userSignupFailed = error => ({
  type: 'user/SIGNUP/FAILED',
  payload: error
});

export const userSignout = () => ({
  type: 'user/SIGNOUT'
});

export const userSignoutSuccess = () => ({
  type: 'user/SIGNOUT/SUCCESS'
});

export const userSignoutFailed = error => ({
  type: 'user/SIGNOUT/FAILED',
  payload: error
});

export const persistUserSession = () => ({
  type: 'user/PERSIST'
});

export const rehydrateUserSession = user => ({
  type: 'user/REHYDRATE',
  payload: user
});

// REDUCER
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'user/SIGNIN/FAILED':
    case 'user/SIGNUP/FAILED':
    case 'user/SIGNOUT/FAILED':
      return { ...state, error: action.payload, loading: false };

    case 'user/SIGNIN/SUCCESS':
    case 'user/REHYDRATE':
      return { ...state, currentUser: action.payload, loading: false };

    case 'user/SIGNOUT/SUCCESS':
      return { ...state, currentUser: null, loading: false };

    case 'user/SIGNUP':
    case 'user/SIGNIN/EMAIL':
    case 'user/SIGNIN/GOOGLE':
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default userReducer;
