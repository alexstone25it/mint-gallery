import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import backDropReducer from "./backDropReducer";
import basketReducer from "./basketReducer";
import chosenPhotoReducer from "./chosenPhotoReducer";

const rootReducer = () => {
  combineReducers({
    photoData: dataReducer,
    backDrop: backDropReducer,
    basket: basketReducer,
    chosenPhotoInfo: chosenPhotoReducer
  });
};

export default rootReducer;
