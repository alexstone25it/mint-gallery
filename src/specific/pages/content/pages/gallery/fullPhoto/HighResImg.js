import React from "react";

const HighResImg = props => {
  const { highResSrc, alt, title, id } = props.photo;

  return (
    <div>
      <img src={`${highResSrc}.jpg`} alt={alt} key={`${id}Big`} />
      <h6>{title}</h6>
    </div>
  );
};
export default HighResImg;
