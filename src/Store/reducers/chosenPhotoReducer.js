//export const ADD_CHOSEN_PHOTO = "ADD_CHOSEN_PHOTO";
//export const ADD_CHOSEN_PHOTO_SIZE = "ADD_CHOSEN_PHOTO_SIZE";
//export const ADD_CHOSEN_PHOTO_PRICE = "ADD_CHOSEN_PHOTO_PRICE";
//export const RESET_CHOSEN_PHOTO = "RESET_CHOSEN_PHOTO";

const initialState = {
  chosenPhoto: {},
  chosenPhotoSize: "",
  chosenPhotoPrice: "€0"
};

const chosenPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHOSEN_PHOTO":
      console.log("add chosen photo");
      break;
    case "ADD_CHOSEN_PHOTO_SIZE":
      console.log("add photo size");
      break;
    case "ADD_CHOSEN_PHOTO_PRICE":
      console.log("add photo price");
      break;
    case "RESET_CHOSEN_PHOTO":
      console.log("reset photo");
      break;
    default:
      return state;
  }
};

export default chosenPhotoReducer;
