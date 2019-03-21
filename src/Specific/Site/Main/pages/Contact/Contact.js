import React, { Component } from "react";
import styles from "./Contact.module.css";

import Div from "../../../../../General/containers/general/Div";
import H2General from "../../../../../General/components/typography/headings/h2/H2General";
import CursiveSpan from "../../../../../General/components/typography/spans/CursiveSpan";
import MessageForm from "../../../../../General/components/Forms/MessageForm";

class Contact extends Component {
  render() {
    return (
      <Div
        containerSize="size85"
        containerDisplay="withFlexCol"
        containerColor="withOffWhite"
      >
        <H2General headingType="smaller">
          Contact <br />
          <CursiveSpan>Mint Photography</CursiveSpan>
        </H2General>
        <p className={styles.introTxt}>Ask us anything</p>
        <MessageForm />
      </Div>
    );
  }
}

export default Contact;
