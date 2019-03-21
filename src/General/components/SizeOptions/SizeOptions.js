import React, { Fragment } from "react";
import styles from "./SizeOptions.module.css";

const SizeOptions = props => {
  const { dimensionsAndCosts, idKey } = props.chosenPhoto;
  const sizes = Object.keys(dimensionsAndCosts);
  const prices = Object.values(dimensionsAndCosts);
  return (
    <Fragment>
      <select className={styles.selector} onChange={props.findPrice.bind(this)}>
        <option value={idKey}>sizes available</option>
        {sizes.map((item, index) => (
          <option
            className={styles.options}
            key={`${item}Opt`}
            value={prices[index]}
          >
            {item}
          </option>
        ))}
      </select>
      <p className={styles.price}>{props.chosenPhotoPrice}</p>
    </Fragment>
  );
};

export default SizeOptions;
