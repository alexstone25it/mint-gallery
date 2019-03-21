import React from "react";
import styles from "./Sent.module.css";

const Sent = props => <p className={styles.sent}>{props.children}</p>;

export default Sent;
