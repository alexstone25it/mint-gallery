import React, { Fragment } from "react";

const FieldSet = props => (
  <Fragment>
    <fieldset>{props.children}</fieldset>
  </Fragment>
);

export default FieldSet;
