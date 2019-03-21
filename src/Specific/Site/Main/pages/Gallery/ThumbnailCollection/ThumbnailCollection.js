import React from "react";

import Div from "../../../../../../General/containers/general/Div";
import ThumbnailGroup from "./ThumbnailGroup/ThumbnailGroup";

const ThumbnailCollection = props => (
  <Div
    containerSize="size100"
    containerDisplay="withGrid"
    containerColor="withRed"
    extras="thumbnailGallery"
  >
    {props.photoData.map((item, index) => (
      <ThumbnailGroup
        photoGroup={props.photoData[index]}
        key={`group${item.grpKey}`}
        showBigPhoto={props.showBigPhoto}
      />
    ))}
  </Div>
);

export default ThumbnailCollection;
