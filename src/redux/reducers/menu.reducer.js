// INITIAL STATE
const INITIAL_STATE = {
  sections: [],
  error: null
};

// ACTION CREATORS
export const loadMenuStart = () => ({
  type: 'menu/FETCH_SECTIONS/STARTED'
});

export const loadMenuFinished = sections => ({
  type: 'menu/FETCH_SECTIONS/SUCCESS',
  payload: sections
});

export const loadMenuFailed = error => ({
  type: 'menu/FETCH_SECTIONS/FAILED',
  payload: error
});

// REDUCER
const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'menu/FETCH_SECTIONS/FAILED':
      return { ...state, loading: false, error: action.payload };

    case 'menu/FETCH_SECTIONS/SUCCESS':
      return {
        ...state,
        sections: [...state.sections, ...action.payload],
        loading: false
      };

    default:
      return state;
  }
};

export default menuReducer;
