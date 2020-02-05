/************************
 * collections: {
 * 		collectionTitle: {
 * 				overviewItems: [arr of 4],
 * 				items: [allitems],
 * 				id: collectionId;
 * 		}
 * }
 */

// INITIAL STATE
const INITIAL_STATE = {
  collections: {},
  error: null
};

// ACTION CREATORS
export const fetchCollectionsStart = () => ({
  type: 'shop/FETCH_COLLECTIONS'
});

export const fetchCollectionsSuccess = collections => ({
  type: 'shop/FETCH_COLLECTIONS/SUCCESS',
  payload: collections
});

export const fetchCollectionsFailed = error => ({
  type: 'shop/FETCH_COLLECIONS/FAILED',
  paylod: error
});

// REDUCER
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'shop/FETCH_COLLECTIONS/SUCCESS':
      return {
        ...state,
        collections: action.payload
      };

    case 'shop/FETCH_COLLECTIONS/FAILED':
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default shopReducer;
