import React, { Component } from "react";
import styles from "./Checkout.module.css";

import Div from "../../../sharedComponents/boxes/Div";
import H1General from "../../../sharedComponents/typography/headings/h1/H1General";
import H2General from "../../../sharedComponents/typography/headings/h2/H2General";
import OrderForm from "../../../sharedComponents/forms/OrderForm";

class Checkout extends Component {
  render() {
    return (
      <Div
        containerSize="full"
        containerDisplay="withFlexCol"
        containerColor="withRed"
      >
        <H1General
          headingType="standard"
          headingColor="withWhite"
          extras="cursive"
        >
          Mint Photography
        </H1General>
        <H2General
          headingType="centerBlock"
          headingColor="withWhite"
          extras="italic"
        >
          Checkout
        </H2General>
        <p className={styles.txt}>Please enter your details</p>
        <OrderForm />
      </Div>
    );
  }
}
export default Checkout;
