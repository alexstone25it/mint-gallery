import React from "react";
import styles from "./H2Headings.module.css";

const H2General = props => (
  <h2
    className={[
      styles[props.headingType],
      styles[props.headingColor],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </h2>
);

export default H2General;
