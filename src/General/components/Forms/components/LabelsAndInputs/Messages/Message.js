import React, { Fragment } from "react";

const Message = props => (
  <Fragment>
    <label htmlFor="message">Please feel free to send us a message</label>
    <input
      type="textarea"
      id="message"
      name="userMessage"
      required={props.required}
    />
  </Fragment>
);

export default Message;
