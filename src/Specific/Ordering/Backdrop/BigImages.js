import React, { Fragment } from "react";

const BigImages = props => {
  const { highResSrc, title, alt, idKey } = props.chosenPhoto;
  return (
    <Fragment>
      <img
        src={require(`(../../../src/General/assets/Images/${highResSrc}.jpg`)}
        alt={alt}
        key={`${idKey}Big`}
      />
      <h6>{title}</h6>
    </Fragment>
  );
};
export default BigImages;
