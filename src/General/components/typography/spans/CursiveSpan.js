import React from "react";
import styles from "./CursiveSpan.module.css";

const CursiveSpan = props => (
  <span className={styles.cursive}>{props.children}</span>
);

export default CursiveSpan;
