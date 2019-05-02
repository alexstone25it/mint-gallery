import React, { Fragment } from "react";

const Tel = props => (
  <Fragment>
    <label htmlFor="phone">Contact Number</label>
    <input
      type="tel"
      id="phone"
      placeholder="Phone Number"
      required={props.required}
    />
  </Fragment>
);

export default Tel;
