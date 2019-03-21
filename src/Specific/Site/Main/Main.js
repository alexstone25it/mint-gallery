import React, { Component } from "react";

import { Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "../Main/pages/About/About";
import Contact from "../Main/pages/Contact/Contact";
import Services from "./pages/Services/Services";

class Main extends Component {
  render() {
    return (
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/services" exact component={Services} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </main>
    );
  }
}
export default Main;
