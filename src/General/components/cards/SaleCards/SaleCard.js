import React from "react";
import styles from "./SaleCard.module.css";

import SizeOptions from "../../SizeOptions/SizeOptions";
import Button from "./../../buttons/Button/Button";

const SaleCard = props => {
  return props.photoData.map((_, index) =>
    props.photoData[index].photos.map((item, _) => (
      <div className={styles.wrapper} key={item.idKey}>
        <img
          src={require(`../../../assets/Images/${item.src}.jpg`)}
          alt={item.alt}
        />
        <h6 className={styles.title}>{item.title}</h6>
        <SizeOptions
          chosenPhoto={item}
          findPrice={props.findPrice}
          chosenPhotoSize={props.chosenPhotoSize}
          chosenPhotoPrice={props.chosenPhotoPrice}
        />
        <Button btnType="bigYellow">Place an order</Button>
      </div>
    ))
  );
};

export default SaleCard;
