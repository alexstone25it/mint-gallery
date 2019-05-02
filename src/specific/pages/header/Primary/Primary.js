import React from "react";
import styles from "./Primary.module.css";

import Hr from "./Hr";

const Primary = () => (
  <h1 className={styles.primary}>
    <span>Mint</span>
    <Hr />
    <span>Photography</span>
    <br />
    <span>by Alice</span>
  </h1>
);

export default Primary;
