import React, { Fragment } from "react";

const Names = props => (
  <Fragment>
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      id="firstName"
      placeholder="First Name"
      required={props.required}
    />
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      id="lastName"
      placeholder="Last Name"
      required={props.required}
    />
  </Fragment>
);

export default Names;
