import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Pages from "./content/Pages";
import Footer from "./footer/Footer";

import FullPhoto from "./content/pages/gallery/fullPhoto/FullPhoto";

class PageTemplate extends Component {
  render() {
    return (
      <div>
        <Route path="/gallery/photo" exact component={FullPhoto} />
        <Route path="/" component={Header} />
        <Route path="/" component={Navbar} />
        <Route path="/" component={Pages} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}
export default PageTemplate;
