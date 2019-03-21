import React from "react";
import styles from "./FigureCard.module.css";

const FigureCard = props => (
  <figure className={styles.wrapper} onClick={props.onClick}>
    <img
      className={styles.img}
      src={require(`../../../assets/Images/${props.photo.src}.jpg`)}
      alt={props.photo.alt}
    />
    <figcaption className={styles.caption}>{props.photo.caption}</figcaption>
  </figure>
);
export default FigureCard;
