import {
  addItem,
  removeItem,
  decreaseItemQuantity
} from '../../utils/utils.functions';

// INITIAL STATE
const INITIAL_STATE = {
  items: {},
  cartHidden: true
};

// ACTION CREATORS
export const toggleCartHidden = () => ({
  type: 'cart/TOGGLE_HIDDEN'
});

export const hideCart = () => ({
  type: 'cart/HIDE'
});

export const addItemToCart = item => ({
  type: 'cart/ADD_ITEM',
  payload: item
});

export const removeItemFromCart = itemId => ({
  type: 'cart/REMOVE_ITEM',
  payload: itemId
});

export const clearCart = () => ({
  type: 'cart/CLEAR_ITEMS'
});

export const decCartItemQuantity = itemId => ({
  type: 'cart/DECREASE_ITEM_QUANTITY',
  payload: itemId
});

// REDUCER
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'cart/TOGGLE_HIDDEN':
      return { ...state, cartHidden: !state.cartHidden };

    case 'cart/HIDE':
      return { ...state, cartHidden: true };

    case 'cart/ADD_ITEM':
      return { ...state, items: addItem(state.items, action.payload) };

    case 'cart/REMOVE_ITEM':
      return { ...state, items: removeItem(state.items, action.payload) };

    case 'cart/CLEAR_ITEMS':
      return { ...state, items: {} };

    case 'cart/DECREASE_ITEM_QUANTITY':
      return {
        ...state,
        items: decreaseItemQuantity(state.items, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
