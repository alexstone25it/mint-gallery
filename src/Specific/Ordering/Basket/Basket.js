import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import styles from "./Basket.module.css";

import Div from "../../../General/containers/general/Div";
import H1General from "../../../General/components/typography/headings/h1/H1General";
import H2General from "../../../General/components/typography/headings/h2/H2General";
import BigImages from "../Backdrop/BigImages";
import Button from "../../../General/components/buttons/Button/Button";

class Basket extends Component {
  render() {
    return (
      <Route
        path="/ordering/basket"
        exact
        render={() => (
          <Div
            containerSize="full"
            containerDisplay="withFlexCol"
            containerColor="withRed"
          >
            <H1General
              headingType="standard"
              headingColor="withWhite"
              extras="cursive"
            >
              Mint Photography
            </H1General>
            <H2General
              headingType="centerBlock"
              headingColor="withWhite"
              extras="italic"
            >
              Your basket
            </H2General>
            <div className={styles.continueShopping}>
              <Button btnType="general" onClick={this.onReturnToSite}>
                <Link to="/gallery">Continue Shopping</Link>
              </Button>
            </div>

            {this.props.basket.length < 1 ? (
              <p className={styles.emptyBasket}>Your basket is empty!</p>
            ) : (
              <div className={styles.basketContentWrapper}>
                {this.props.basket.map((item, index) => (
                  <div className={styles.basketItemBox} key={index}>
                    <div className={styles.imageWrapper}>
                      <BigImages chosenPhoto={item.photo} />
                    </div>

                    <div className={styles.itemInfo}>
                      <p className={styles.itemSubTitle}>
                        {item.photo.caption}
                      </p>
                      <div>{item.size}</div>
                      <div className={styles.itemPrice}>{item.price}</div>
                    </div>
                    <div className={styles.itemButtonWrapper}>
                      <Button
                        btnType="general"
                        onClick={this.props.onRemoveBasketItem}
                      >
                        Remove from basket
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.totalPriceBox}>
              Total Price: {this.props.totalPrice}
            </div>

            <div className={styles.orderButtonWrapper}>
              <Button btnType="general">
                <Link to="/ordering/checkout">Place my order</Link>
              </Button>
            </div>
          </Div>
        )}
      />
    );
  }
}
/*
Basket.propTypes = {
  onclick: PropTypes.func
};
*/
const mapStateToProps = state => {
  return {
    chosenPhoto: state.chosenPhoto,
    basket: state.basket,
    totalPrice: state.totalPrice
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onReturnToSite: () => {
      dispatch({ type: "REMOVE_BACKDROP" });
      dispatch({ type: "RESET_CHOSEN_PHOTO" });
    },
    onRemoveBasketItem: () => {
      dispatch({ type: "REMOVE_BASKET_ITEM" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
