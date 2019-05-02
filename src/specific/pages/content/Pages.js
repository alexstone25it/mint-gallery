import React, { Component } from "react";

import { Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";

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
