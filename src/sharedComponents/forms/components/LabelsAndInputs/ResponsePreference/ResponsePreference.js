import React, { Fragment } from "react";

const ResponsePreference = props => (
  <Fragment>
    <p>
      Here, at Mint, we tend to use email.
      <br />
      If you would prefer to be contacted by phone instead, please check the
      box.
    </p>
    <input
      type="checkbox"
      id="responsePreference"
      name="responsePreference"
      required={props.required}
    />
    <label htmlFor="responsePreference" />
  </Fragment>
);

export default ResponsePreference;
