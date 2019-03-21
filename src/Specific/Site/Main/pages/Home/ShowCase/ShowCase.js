import React from "react";

import Div from "../../../../../../General/containers/general/Div";
import FlipCard from "../../../../../../General/components/cards/FlipCards/FlipCard";

const ShowCase = props => {
  const showCaseData = [];
  props.photoData.map((item, _) =>
    item.photos.map((item, _) =>
      item.axis !== undefined ? showCaseData.push(item) : null
    )
  );
  return (
    <Div
      containerSize="size90"
      containerDisplay="withGrid"
      containerColor="withGreen"
      extras="showCase"
    >
      <FlipCard showCaseData={showCaseData} />
    </Div>
  );
};
export default ShowCase;
