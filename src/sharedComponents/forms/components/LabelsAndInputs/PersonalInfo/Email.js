import React, { Fragment } from "react";

const Email = props => (
  <Fragment>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      placeholder="Email"
      required={props.required}
    />
  </Fragment>
);

export default Email;
