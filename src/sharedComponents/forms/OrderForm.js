import React, { Component } from "react";
import styles from "./Form.module.css";

import FieldSet from "./components/fieldsets/FieldSet";
import Legend from "./components/legends/Legend";
import Title from "./components/LabelsAndInputs/PersonalInfo/Title";
import Names from "./components/LabelsAndInputs/PersonalInfo/Names";
import Email from "./components/LabelsAndInputs/PersonalInfo/Email";
import Tel from "./components/LabelsAndInputs/PersonalInfo/Tel";
import Address from "./components/LabelsAndInputs/PersonalInfo/Address";

class OrderForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <FieldSet>
          <Legend>Title</Legend>
          <Title />
        </FieldSet>
        <FieldSet>
          <Legend>Personal Information</Legend>
          <Names required="required" />
        </FieldSet>
        <FieldSet>
          <Legend>Address</Legend>
          <Address required="required" />
        </FieldSet>
        <FieldSet>
          <Legend>Contact Information</Legend>
          <Email required="required" />
          <Tel required="required" />
        </FieldSet>
      </form>
    );
  }
}

export default OrderForm;
