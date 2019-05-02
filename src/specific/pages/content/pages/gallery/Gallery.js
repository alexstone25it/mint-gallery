import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "../../../../../sharedComponents/boxes/Section";
import H2General from "../../../../../sharedComponents/typography/headings/h2/H2General";
import GalleryCollections from "./galleryCollections/GalleryCollections";

import { addChosenPhoto } from "../../../../../redux/ActionCreators";

class Gallery extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Section containerType="size100" containerColor="withRed">
        <H2General
          headingType="bigger"
          headingColor="withWhite"
          extras="cursive"
        >
          Photographic Collections by Alice
        </H2General>
        <GalleryCollections
          photoData={this.props.photoData}
          handlePhotoChosen={this.props.addChosenPhoto}
        />
      </Section>
    );
  }
}
const mapStateToProps = state => ({
  photoData: state.photoData
});
const mapDispatchToProps = dispatch => ({
  addChosenPhoto: chosenPhoto => dispatch(addChosenPhoto(chosenPhoto))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
