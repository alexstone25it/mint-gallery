import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./FullPhoto.module.css";

import HighResImg from "./HighResImg";
import Button from "../../../../../../sharedComponents/buttons/Button/Button";

import { removeChosenPhoto } from "../../../../../../redux/ActionCreators";

class FullPhoto extends Component {
  render() {
    return (
      <div className={styles.backdrop}>
        <HighResImg photo={this.props.basket.chosenPhoto} />
        <div className={styles.btnWrapper}>
          <Button btnType="general" onClick={this.props.removeChosenPhoto}>
            <Link to={"/gallery"}>Back</Link>
          </Button>

          <Button btnType="general">
            <Link to={"/order/approve"}>Order</Link>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});
const mapDispatchToProps = dispatch => ({
  removeChosenPhoto: () => dispatch(removeChosenPhoto())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullPhoto);
