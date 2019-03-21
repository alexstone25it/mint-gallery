//const ADD_BACKDROP = "ADD_BACKDROP";
//const REMOVE_BACKDROP = "REMOVE_BACKDROP";

const initialState = {
  backDropIsShowing: false
};

const backDropReducer = (state = initialState, action) => {
  switch (action.type) {
    case undefined:
      console.log("undefined");
      break;
    case "ADD_BACKDROP":
      console.log("add backdrop clicked");

      break;
    case "REMOVE_BACKDROP":
      console.log("remove backdrop");
      break;
    default:
      return state;
  }
};
export default backDropReducer;
