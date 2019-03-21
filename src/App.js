import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Provider } from "react-redux";

import "./App.css";

import store from "./Store/store";

import Site from "./Specific/Site/Site";
import Approve from "./Specific/Ordering/Approve/Approve";
import Basket from "./Specific/Ordering/Basket/Basket";
import Checkout from "./Specific/Ordering/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route
            path={["/", "/about", "/gallery", "/services", "/contact"]}
            exact
            component={Site}
          />
          <Route path="/ordering/approve" exact component={Approve} />
          <Route path="/ordering/basket" exact component={Basket} />
          <Route path="/ordering/checkout" exact component={Checkout} />
        </div>
      </Provider>
    );
  }
}

export default App;
