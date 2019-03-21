import React, { Component } from "react";
import styles from "./Form.module.css";

import Axios from "../../../Axios";

import FieldSet from "./components/fieldsets/FieldSet";
import Legend from "./components/legends/Legend";
import Title from "./components/LabelsAndInputs/PersonalInfo/Title";
import Names from "./components/LabelsAndInputs/PersonalInfo/Names";
import Email from "./components/LabelsAndInputs/PersonalInfo/Email";
import Tel from "./components/LabelsAndInputs/PersonalInfo/Tel";
import Message from "./components/LabelsAndInputs/Messages/Message";
import ResponsePreference from "./components/LabelsAndInputs/ResponsePreference/ResponsePreference";
import Sent from "./components/btnsNbits/Sent/Sent";
import SendButton from "./components/btnsNbits/SendButton/SendButton";
import DotLoader from "../loaders/DotLoader/DotLoader";

class MessageForm extends Component {
  state = {
    messageForm: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
      message: "",
      responsePreference: "off"
    },
    formErrors: {
      firstName: "invalid",
      lastName: "invalid",
      email: "invalid",
      message: "invalid"
    },
    notLoading: true,
    formIsValid: false,
    messageSent: false
  };
  inputHandler = event => {
    const newMessageForm = { ...this.state.messageForm };
    const newFormErrors = { ...this.state.formErrors };
    const target = event.target.id;
    const value = event.target.value;
    if (target === "mr" || target === "mrs" || target === "ms") {
      newMessageForm.title = value;
    } else {
      newMessageForm[target] = value;
    }
    this.setState({
      messageForm: newMessageForm
    });
    ////////Form validation here /////
    if (target === "firstName") {
      value.trim().length > 0
        ? (newFormErrors.firstName = "valid")
        : (newFormErrors.firstName = "invalid");
    } else if (target === "lastName") {
      value.trim().length > 0
        ? (newFormErrors.lastName = "valid")
        : (newFormErrors.lastName = "invalid");
    } else if (target === "email") {
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ? (newFormErrors.email = "valid")
        : (newFormErrors.email = "invalid");
    } else if (target === "message") {
      value.trim().length > 6
        ? (newFormErrors.message = "valid")
        : (newFormErrors.message = "invalid");
    }
    this.setState({
      formErrors: newFormErrors
    });
    /////////////////////
    const possErrors = Object.values(this.state.formErrors).some(
      el => el === "invalid"
    );
    if (!possErrors) {
      this.setState({
        formIsValid: true
      });
    } else {
      this.setState({
        formIsValid: false
      });
    }
  };
  submitFormHandler = event => {
    event.preventDefault();
    this.setState({
      notLoading: false
    });
    Axios.post("/message.json", this.state.messageForm)
      .then(response => {
        this.setState({
          notLoading: true,
          messageSent: true
        });
        console.log(response);
      })
      .catch(error => {
        this.setState({ notLoading: false });
        console.log(error);
      });
    setTimeout(() => window.location.reload(), 2500);
  };
  render() {
    return (
      <form onChange={this.inputHandler} className={styles.form}>
        <FieldSet>
          <Legend>Title</Legend>
          <Title />
        </FieldSet>
        <FieldSet>
          <Legend>Personal Information</Legend>
          <Names required="required" />
          <Email required="required" />
          <Tel />
        </FieldSet>
        <FieldSet>
          <Legend>Message</Legend>
          <Message required="required" />
        </FieldSet>
        <ResponsePreference />
        {this.state.messageSent ? (
          <Sent>Your message has been sent.</Sent>
        ) : this.state.notLoading ? (
          <SendButton
            onClick={this.submitFormHandler}
            disabled={!this.state.formIsValid}
            messageSent={this.state.messageSent}
          />
        ) : (
          <DotLoader />
        )}
      </form>
    );
  }
}

export default MessageForm;
