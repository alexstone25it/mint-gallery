import React from "react";
import styles from "./Container.module.css";

const Div = props => (
  <div
    className={[
      styles[props.containerSize],
      styles[props.containerDisplay],
      styles[props.containerColor],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </div>
);

export default Div;
