import React from "react";

import { Link } from "react-router-dom";

import styles from "./CollectionGroup.module.css";

import Div from "../../../../../../sharedComponents/boxes/Div";
import FigureCard from "../../../../../../sharedComponents/cards/FigureCards/FigureCard";

const CollectionGroup = props => (
  <Div>
    <h3 className={styles.subheading}>{props.collectionTitle}</h3>
    <Div
      containerSize="size100"
      containerDisplay="withFlexRow"
      extras="wrapped"
    >
      {props.photoGroup.map(item => (
        <div key={item.id}>
          <Link to="/gallery/photo">
            <FigureCard
              photo={item}
              name={item.id}
              onClick={props.handlePhotoChosen}
            />
          </Link>
        </div>
      ))}
    </Div>
  </Div>
);
export default CollectionGroup;
