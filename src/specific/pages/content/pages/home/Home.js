import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ShowCase from "./showCase/ShowCase";
import Trio from "./trio/Trio";
import QuotedBits from "./quotedBits/QuotedBits";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <ShowCase photoData={this.props.photoData} />
        <QuotedBits />
        <Trio photoData={this.props.photoData} />
        <QuotedBits />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    photoData: state.photoData
  };
};
export default connect(mapStateToProps)(Home);
