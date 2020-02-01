// INITIAL STATE
const INITIAL_STATE = {
  sections: [],
  loading: false,
  error: null
};

// ACTION CREATORS
export const loadMenuStart = () => ({
  type: 'menu/FETCH_SECTIONS/STARTED'
});

export const loadMenuProgress = () => ({
  type: 'menu/FETCH_SECTIONS/PROGRESS'
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
    case 'menu/FETCH_SECTIONS/PROGRESS':
      return { ...state, loading: true };

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
