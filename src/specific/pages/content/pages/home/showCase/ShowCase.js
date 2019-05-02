import React from "react";

import Div from "../../../../../../sharedComponents/boxes/Div";
import FlipCard from "../../../../../../sharedComponents/cards/FlipCards/FlipCard";

const ShowCase = props => {
  const showCaseData = [];
  props.photoData.map((item, _) =>
    item.axis !== undefined ? showCaseData.push(item) : null
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
