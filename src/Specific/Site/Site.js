import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../Site/Header/Header";
import Navbar from "../Site/Navbar/Navbar";
import Main from "../Site/Main/Main";
import Footer from "../Site/Footer/Footer";

import Backdrop from "../Ordering/Backdrop/Backdrop";

class Site extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Backdrop} />
        <Route
          path={["/", "/about", "/gallery", "/services", "/contact"]}
          exact
          component={Header}
        />
        <Route
          path={["/", "/about", "/gallery", "/services", "/contact"]}
          exact
          component={Navbar}
        />
        <Route
          path={["/", "/about", "/gallery", "/services", "/contact"]}
          exact
          component={Main}
        />
        <Route
          path={["/", "/about", "/gallery", "/services", "/contact"]}
          exact
          component={Footer}
        />
      </div>
    );
  }
}

export default Site;
