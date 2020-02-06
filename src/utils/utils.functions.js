import _ from 'lodash';

// function to add items to cart in cart reducer
export const addItem = (targetObj, item) => {
  let tempItem, tempQuantity;
  console.log(item.id);
  const id = item.id.toString();
  if (!targetObj[id]) {
    tempQuantity = 1;
    tempItem = { ...item, quantity: tempQuantity };

    return { ...targetObj, [id]: tempItem };
  }

  tempQuantity = targetObj[id].quantity + 1;
  tempItem = { ...targetObj[id], quantity: tempQuantity };
  return { ...targetObj, [id]: tempItem };
};

export const removeItem = (targetObj, itemId) => {
  if (Object.keys(targetObj).length > 1) {
    return _.omit(targetObj, itemId);
  }
  return {};
};

export const decreaseItemQuantity = (targetObj, itemId) => {
  let tempItemQuantity;
  const tempItem = targetObj[itemId];
  if (tempItem.quantity > 1) {
    tempItemQuantity = tempItem.quantity - 1;
    return {
      ...targetObj,
      [itemId]: { ...tempItem, quantity: tempItemQuantity }
    };
  }
  return removeItem(targetObj, itemId);
};
