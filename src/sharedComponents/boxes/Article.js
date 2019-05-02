import React from "react";
import styles from "./Container.module.css";

const Article = props => (
  <article
    className={[
      styles[props.containerSize],
      styles[props.containerDisplay],
      styles[props.containerColor],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </article>
);

export default Article;
