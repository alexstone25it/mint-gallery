import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import styles from "./Approve.module.css";

import H1General from "../../../General/components/typography/headings/h1/H1General";
import BigImages from "../Backdrop/BigImages";
import SizeOptions from "../../../General/components/SizeOptions/SizeOptions";
import Button from "../../../General/components/buttons/Button/Button";

class Approve extends Component {
  state = {
    chosenPrice: 0,
    chosenSize: 0
  };
  findPriceHandler = event => {
    const cost = event.target.value;
    const possibleSizes = this.props.chosenPhoto.dimensionsAndCosts;
    const index = Object.values(possibleSizes).findIndex(
      value => value === cost
    );
    const size = Object.keys(possibleSizes)[index];
    this.setState({
      chosenPrice: cost,
      chosenSize: size
    });
  };
  render() {
    return (
      <Route
        path="/ordering/approve"
        exact
        render={() => (
          <div className={styles.container}>
            <H1General
              headingType="standard"
              headingColor="withWhite"
              extras="cursive"
            >
              Mint Photography
            </H1General>
            <div className={styles.imageWrapper}>
              <BigImages chosenPhoto={this.props.chosenPhoto} />
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.subTitle}>
                {this.props.chosenPhoto.caption}
              </p>
              <SizeOptions
                chosenPhoto={this.props.chosenPhoto}
                findPrice={this.findPriceHandler}
                chosenPhotoSize={this.props.chosenPhotoSize}
                chosenPhotoPrice={this.props.chosenPhotoPrice}
              />
            </div>
            <Button btnType="general">
              <Link to="/">Return </Link>
            </Button>
            <Button btnType="general" onClick={this.onAddToBasket}>
              <Link to="/ordering/basket">Add to Basket</Link>
            </Button>
          </div>
        )}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    chosenPhoto: state.chosenPhotoInfo.chosenPhoto,
    chosenPhotoPrice: state.chosenPhotoInfo.chosenPhotoPrice,
    chosenPhotoSize: state.chosenPhotoInfo.chosenPhotoSize
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddToBasket: item => {
      dispatch({ type: "ADD_BASKET_ITEM", payload: item });
      dispatch({
        type: "ADD_CHOSEN_PHOTO_SIZE",
        payload: this.state.chosenSize
      });
      dispatch({
        type: "ADD_CHOSEN_PHOTO_PRICE",
        payload: this.state.chosenPrice
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Approve);
