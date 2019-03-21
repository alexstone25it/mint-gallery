import React from "react";
import styles from "./H1Headings.module.css";

const H1General = props => (
  <h1
    className={[
      styles[props.headingType],
      styles[props.headingColor],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </h1>
);

export default H1General;
