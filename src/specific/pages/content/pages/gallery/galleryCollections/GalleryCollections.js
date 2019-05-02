import React from "react";

import Div from "../../../../../../sharedComponents/boxes/Div";
import CollectionGroup from "./CollectionGroup";

const GalleryCollections = props => {
  const lakeCollection = props.photoData.filter(
    photo => photo.grpId === "lake"
  );
  const forestCollection = props.photoData.filter(
    photo => photo.grpId === "forest"
  );
  const cityCollection = props.photoData.filter(
    photo => photo.grpId === "city"
  );
  return (
    <Div
      containerSize="size100"
      containerDisplay="withGrid"
      containerColor="withRed"
      extras="thumbnailGallery"
    >
      <CollectionGroup
        photoGroup={lakeCollection}
        collectionTitle="The Lake Collection"
        handlePhotoChosen={props.handlePhotoChosen}
      />
      <CollectionGroup
        photoGroup={forestCollection}
        collectionTitle="The Forest Collection"
        handlePhotoChosen={props.handlePhotoChosen}
      />
      <CollectionGroup
        photoGroup={cityCollection}
        collectionTitle="The City Collection"
        handlePhotoChosen={props.handlePhotoChosen}
      />
    </Div>
  );
};

export default GalleryCollections;
