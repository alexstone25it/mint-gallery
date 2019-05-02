import React from "react";
import styles from "./Container.module.css";

const Section = props => (
  <section
    className={[
      styles[props.containerSize],
      styles[props.containerDisplay],
      styles[props.containerColor],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </section>
);

export default Section;
