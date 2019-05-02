import React, { Fragment } from "react";

const Title = props => (
  <Fragment>
    <label htmlFor="mr">Mr</label>
    <input
      type="radio"
      id="mr"
      name="title"
      value="mr"
      required={props.required}
    />
    <label htmlFor="mrs">Mrs</label>
    <input
      type="radio"
      id="mrs"
      name="title"
      value="mrs"
      required={props.required}
    />
    <label htmlFor="ms">Ms</label>
    <input
      type="radio"
      id="ms"
      name="title"
      value="ms"
      required={props.required}
    />
  </Fragment>
);

export default Title;
