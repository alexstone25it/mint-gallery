import React from "react";
import styles from "./Blockquotes.module.css";

const BlockQuote = props => (
  <blockquote className={styles.blockquote}>{props.children}</blockquote>
);

export default BlockQuote;
