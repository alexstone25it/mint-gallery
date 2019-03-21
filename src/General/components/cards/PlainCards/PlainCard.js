import React from "react";
import styles from "./PlainCard.module.css";

const PlainCard = props => (
  <div className={styles.imgWrapper}>
    <img
      src={require(`../../../assets/Images/${props.photo.src}.jpg`)}
      className={styles.image}
      alt={props.photo.alt}
    />
  </div>
);

export default PlainCard;
