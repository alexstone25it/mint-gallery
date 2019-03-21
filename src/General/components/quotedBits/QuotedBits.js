import React from "react";
import styles from "./QuotedBits.module.css";

import Quotations from "./Quotations/Quotations";
import BlockQuote from "./BlockQuotes/Blockquote";

const QuotedBits = () => (
  <section className={styles.background}>
    <BlockQuote>
      <Quotations />
    </BlockQuote>
  </section>
);

export default QuotedBits;
