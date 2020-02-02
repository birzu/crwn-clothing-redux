// Initial state
const INITIAL_STATE = {
  authModalHidden: true
};
// Action Creators
export const toggleAuthModalHidden = () => ({
  type: 'auth/TOGGLE_MODAL'
});

// Reducer
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'auth/TOGGLE_MODAL':
      return { ...state, authModalHidden: !state.authModalHidden };

    default:
      return state;
  }
};

export default authReducer;
