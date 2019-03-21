import React, { Fragment } from "react";

const Address = props => (
  <Fragment>
    <label htmlFor="house">House</label>
    <input
      type="text"
      id="house"
      placeholder="House Name/Number"
      required={props.required}
    />
    <label htmlFor="street">Street</label>
    <input
      type="text"
      id="street"
      placeholder="Street Name"
      required={props.required}
    />
    <label htmlFor="town">Town</label>
    <input type="text" id="town" placeholder="town" required={props.required} />
    <label htmlFor="city">City</label>
    <input type="text" id="city" placeholder="city" required={props.required} />
    <label htmlFor="country">Country</label>
    <input
      type="text"
      id="country"
      placeholder="Country"
      required={props.required}
    />
    <label htmlFor="postcode">Postcode/Zipcode</label>
    <input
      type="text"
      id="postcode"
      placeholder="Postcode/Zipcode"
      required={props.required}
    />
  </Fragment>
);

export default Address;
