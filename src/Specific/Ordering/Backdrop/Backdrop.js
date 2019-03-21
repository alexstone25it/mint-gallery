import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import styles from "./Backdrop.module.css";

import BigImages from "./BigImages";
import Button from "../../../General/components/buttons/Button/Button";

class Backdrop extends Component {
  render() {
    const backdrop = this.props.backDropIsShowing ? (
      <div className={styles.backdrop}>
        <BigImages chosenPhoto={this.props.addChosenPhoto} />
        <div className={styles.btnWrapper}>
          <Button btnType="general" onClick={this.onRemoveBackDrop}>
            Back{" "}
          </Button>

          <Button btnType="general">
            <Link to={"/ordering/approve"}>Order</Link>
          </Button>
        </div>
      </div>
    ) : null;
    return backdrop;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onRemoveBackDrop: () => {
      dispatch({ type: "REMOVE_BACKDROP" });
      dispatch({ type: "RESET_CHOSEN_PHOTO" });
    }
  };
};

const mapStateToProps = state => {
  return {
    chosenPhoto: state.chosenPhoto,
    backDropIsShowing: state.backDropIsShowing
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Backdrop);
