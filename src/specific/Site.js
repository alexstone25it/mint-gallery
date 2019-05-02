import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PageTemplate from "./pages/PageTemplate";
import Approve from "../../src/specific/order/approve/Approve";
import Basket from "../../src/specific/order/basket/Basket";
import Checkout from "../../src/specific/order/checkout/Checkout";

class Site extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/order/approve" exact component={Approve} />
          <Route path="/order/basket" exact component={Basket} />
          <Route path="/order/checkout" exact component={Checkout} />
          <Route path="/" component={PageTemplate} />
        </Switch>
      </div>
    );
  }
}

export default Site;
