import React from "react";
import styles from "./QuotedBits.module.css";

import Quotations from "./quotations/Quotations";
import BlockQuote from "./blockQuotes/Blockquote";

const QuotedBits = () => (
  <section className={styles.background}>
    <BlockQuote>
      <Quotations />
    </BlockQuote>
  </section>
);

export default QuotedBits;
