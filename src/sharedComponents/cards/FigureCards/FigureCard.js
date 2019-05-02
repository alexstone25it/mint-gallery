import React from "react";
import styles from "./FigureCard.module.css";

const FigureCard = props => (
  <figure
    className={styles.wrapper}
    name={props.name}
    onClick={event => {
      props.onClick(event);
    }}
  >
    <img
      className={styles.img}
      src={`${props.photo.src}.jpg`}
      alt={props.photo.alt}
    />
    <figcaption className={styles.caption}>{props.photo.caption}</figcaption>
  </figure>
);
export default FigureCard;
