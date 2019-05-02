import * as ActionTypes from "../ActionTypes";
import { PHOTODATA } from "../DATAHUB/photoData";

const initialState = {
  chosenPhoto: {},
  basket: [],
  totalPrice: 0
};
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CHOSENPHOTO:
      const photoObject = PHOTODATA.find(photo => photo.id === action.payload);
      return {
        ...state,
        chosenPhoto: photoObject
      };
    case ActionTypes.REMOVE_CHOSENPHOTO:
      return {
        ...state,
        chosenPhoto: {}
      };
    case ActionTypes.ADD_TO_BASKET:
      const size = action.payload[0];
      const price = action.payload[1];
      const photo = state.chosenPhoto;
      const newPhoto = { photo, size, price };
      return {
        ...state,
        basket: [...state.basket, newPhoto],
        chosenPhoto: {},
        totalPrice: state.totalPrice + Number(price.slice(1, price.length))
      };
    case ActionTypes.REMOVE_BASKET_ITEM:
      const index = action.payload;
      const obj = state.basket[index];
      const objPrice = Number(obj.price.slice(1, obj.length));
      return {
        ...state,
        basket: state.basket.filter(photoObj => photoObj !== obj),
        totalPrice: state.totalPrice - objPrice
      };
    case ActionTypes.CALC_TOTAL_PRICE:
      return {
        ...state
      };

    default:
      return state;
  }
};
