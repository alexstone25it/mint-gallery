import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Approve.module.css";

import H1General from "../../../sharedComponents/typography/headings/h1/H1General";
import HighResImg from "../../pages/content/pages/gallery/fullPhoto/HighResImg";
import SizeOptions from "../sizeOptions/SizeOptions";
import Button from "../../../sharedComponents/buttons/Button/Button";

import { removeChosenPhoto, addToBasket } from "../../../redux/ActionCreators";

class Approve extends Component {
  state = {
    chosenPrice: "",
    chosenSize: ""
  };
  findPriceHandler = event => {
    const cost = event.target.value;
    const possibleSizes = this.props.basket.chosenPhoto.dimensionsAndCosts;
    const index = Object.values(possibleSizes).findIndex(
      value => value === cost
    );
    const size = Object.keys(possibleSizes)[index];
    this.setState({
      chosenPrice: cost,
      chosenSize: size
    });
  };
  onAddToBasket = () => {
    const photoInfo = [this.state.chosenSize, this.state.chosenPrice];
    this.props.addToBasket(photoInfo);
  };
  render() {
    return (
      <Route
        path="/order/approve"
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
              <HighResImg photo={this.props.basket.chosenPhoto} />
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.subTitle}>
                {this.props.basket.chosenPhoto.caption}
              </p>
              <SizeOptions
                photo={this.props.basket.chosenPhoto}
                findPrice={this.findPriceHandler}
                chosenSize={this.state.chosenSize}
                chosenPrice={this.state.chosenPrice}
              />
            </div>
            <Button btnType="general" onClick={this.props.removeChosenPhoto}>
              <Link to="/gallery">Return to site</Link>
            </Button>
            <Button btnType="general" onClick={this.onAddToBasket}>
              <Link to="/order/basket">Add to Basket</Link>
            </Button>
          </div>
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  basket: state.basket
});
const mapDispatchToProps = dispatch => ({
  removeChosenPhoto: () => dispatch(removeChosenPhoto()),
  addToBasket: photoInfo => dispatch(addToBasket(photoInfo))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Approve);
