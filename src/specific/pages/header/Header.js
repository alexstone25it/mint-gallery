import React from "react";
import styles from "./Header.module.css";
import Primary from "./Primary/Primary";
import Sub from "./Sub/Sub";

const Header = () => (
  <header className={styles.background} id="NavTop">
    <Primary />
    <Sub />
  </header>
);

export default Header;
