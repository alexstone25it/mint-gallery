import React from "react";
import styles from "./ThumbnailGroup.module.css";

import Div from "../../../../../../../General/containers/general/Div";
import FigureCard from "../../../../../../../General/components/cards/FigureCards/FigureCard";

const ThumbnailGroup = props => (
  <Div>
    <h3 className={styles.subheading}>{props.photoGroup.groupTitle}</h3>
    <Div
      containerSize="size100"
      containerDisplay="withFlexRow"
      extras="wrapped"
    >
      {props.photoGroup.photos.map(item => (
        <FigureCard
          photo={item}
          key={`thumbnails${item.idKey}`}
          onClick={props.showBigPhoto}
        />
      ))}
    </Div>
  </Div>
);
export default ThumbnailGroup;
