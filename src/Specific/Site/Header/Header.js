import React from "react";
import styles from "./Header.module.css";
import Primary from "./components/Primary/Primary";
import Sub from "./components/Sub/Sub";

const Header = () => (
  <header className={styles.background} id="NavTop">
    <Primary />
    <Sub />
  </header>
);

export default Header;
