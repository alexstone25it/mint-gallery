import * as ActionTypes from "./ActionTypes";

export const addChosenPhoto = chosenPhoto => ({
  type: ActionTypes.ADD_CHOSENPHOTO,
  payload: chosenPhoto.target.parentElement.attributes.name.nodeValue
});
export const removeChosenPhoto = () => ({
  type: ActionTypes.REMOVE_CHOSENPHOTO,
  payload: ""
});
export const addToBasket = photoInfo => ({
  type: ActionTypes.ADD_TO_BASKET,
  payload: photoInfo
});
export const removeBasketItem = index => ({
  type: ActionTypes.REMOVE_BASKET_ITEM,
  payload: index
});
export const calcTotalPrice = () => ({
  type: ActionTypes.CALC_TOTAL_PRICE,
  payload: ""
});
