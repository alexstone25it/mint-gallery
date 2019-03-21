import React from "react";
import styles from "./Button.module.css";

const Button = props => (
  <button
    className={[styles.btn, styles[props.btnType]].join(" ")}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
