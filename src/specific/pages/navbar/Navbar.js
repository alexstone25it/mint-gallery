import React, { Component } from "react";
import styles from "./Navbar.module.css";

import NavbarList from "./navbarList/NavbarList";

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <NavbarList />
      </nav>
    );
  }
}

export default Navbar;
