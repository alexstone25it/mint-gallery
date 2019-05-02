import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import Site from "../src/specific/Site";
import { configureStore } from "../src/redux/configureStore";

const store = configureStore();

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Site />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
