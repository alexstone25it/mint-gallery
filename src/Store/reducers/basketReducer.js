//export const ADD_BASKET_ITEM = "ADD_BASKET_ITEM";
//export const REMOVE_BASKET_ITEM = "REMOVE_BASKET_ITEM";

const initialState = {
  basket: [],
  totalPrice: "€0"
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BASKET_ITEM":
      console.log("add basket");
      break;
    case "REMOVE_BASKET_ITEM":
      console.log("remove basket");
      break;
    default:
      return state;
  }
};

export default basketReducer;
{
  /* 
     const item = {
        photo: this.state.chosenPhoto,
        size: this.state.chosenPhotoSize,
        price: this.state.chosenPhotoPrice,
        totalPrice: this.state.chosenPhotoPrice
      };
      const currentTotal = Number(this.state.totalPrice.slice(1));
      const addPrice = Number(this.state.chosenPhotoPrice.slice(1));
      const addTotal = `€${currentTotal + addPrice}`;
      return {
        ...state,
        basket: [item, ...state.basket],
        totalPrice: addTotal
      };*/
  ///////
  /*
         const tempArr = state.basket.filter(el => el !== action.payload);
      const minusPrice = Number(action.payload.price.slice(1));
      const currTotal = Number(this.state.totalPrice.slice(1));
      const total = `€${currTotal - minusPrice}`;
      return {
        ...state,
        basket: tempArr,
        totalPrice: total
      };
    */
}
