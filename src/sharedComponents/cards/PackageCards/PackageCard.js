import React from "react";
import styles from "./PackageCard.module.css";

import Button from "../../buttons/Button/Button";

const PackageCard = props => {
  return props.data.map((_, index) => (
    <div className={styles.card} key={props.data[index].name}>
      <h5 className={styles.title}>{props.data[index].title}</h5>
      <p className={styles.desc}>{props.data[index].desc}</p>
      <Button btnType="fancy">Includes</Button>
    </div>
  ));
};

export default PackageCard;
