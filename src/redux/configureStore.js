import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { PHOTODATA } from "./DATAHUB/photoData";

import { dataReducer } from "./reducers/dataReducer";
import { basketReducer } from "./reducers/basketReducer";

const middleware = [thunk, logger];
const initialState = {
  photoData: PHOTODATA
};
const rootReducer = combineReducers({
  photoData: dataReducer,
  basket: basketReducer
});

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
