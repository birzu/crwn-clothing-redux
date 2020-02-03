// Initial state
const INITIAL_STATE = {
  authModalHidden: true,
  currentForm: 'signin'
};
// Action Creators
export const toggleAuthModalHidden = () => ({
  type: 'auth/TOGGLE_MODAL'
});

export const toggleCurrentForm = formType => ({
  type: 'auth/TOGGLE_FORM',
  payload: formType
});

// Reducer
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'auth/TOGGLE_MODAL':
      return { ...state, authModalHidden: !state.authModalHidden };

    case 'auth/TOGGLE_FORM':
      return { ...state, currentForm: action.payload };

    default:
      return state;
  }
};

export default authReducer;
