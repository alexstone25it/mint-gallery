import React, { Component } from "react";

import { connect } from "react-redux";

import Section from "../../../../../General/containers/general/Section";
import H2General from "../../../../../General/components/typography/headings/h2/H2General";
import ThumbnailCollection from "./ThumbnailCollection/ThumbnailCollection";

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
        <ThumbnailCollection
          photoData={this.props.photoData}
          onShowBigPhoto={this.showBigPhoto}
        />
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    photoData: state.photoData,
    backDropIsShowing: state.backDropIsShowing,
    chosenPhoto: state.chosenPhoto
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShowBigPhoto: () => {
      dispatch({ type: "ADD_BACKDROP" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
