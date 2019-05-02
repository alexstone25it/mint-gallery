import React, { Fragment } from "react";
import styles from "./Quotations.module.css";

const Quotations = () => {
  const topQuotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittisipsum. Praesent mauris. Fusce nec tellus.",
    "Sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
  ];
  const bottomQuotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus.",
    "Sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.  Sed dignissim lacinia nunc."
  ];
  return (
    <Fragment>
      <p className={styles.quotations}>{topQuotes[0]}</p>
      <p className={styles.quotations}>{bottomQuotes[1]}</p>
    </Fragment>
  );
};

export default Quotations;
