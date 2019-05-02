import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from "./Basket.module.css";

import Div from "../../../sharedComponents/boxes/Div";
import H1General from "../../../sharedComponents/typography/headings/h1/H1General";
import H2General from "../../../sharedComponents/typography/headings/h2/H2General";
import Button from "../../../sharedComponents/buttons/Button/Button";
import PlainCard from "../../../sharedComponents/cards/PlainCards/PlainCard";

import { removeBasketItem } from "../../../redux/ActionCreators";

class Basket extends Component {
  render() {
    return (
      <Route
        path="/order/basket"
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

            {this.props.basket.basket.length < 1 ? (
              <p className={styles.emptyBasket}>Your basket is empty!</p>
            ) : (
              <div className={styles.basketContentWrapper}>
                {this.props.basket.basket.map((item, index) => (
                  <div className={styles.basketItemBox} key={index}>
                    <div className={styles.imageWrapper}>
                      <PlainCard photo={item.photo} />
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
                        onClick={() => this.props.removeBasketItem(index)}
                      >
                        Remove from basket
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.totalPriceBox}>
              Total Price: £{this.props.basket.totalPrice}
            </div>

            <div className={styles.orderButtonWrapper}>
              <Button btnType="general">
                <Link to="/order/checkout">Place my order</Link>
              </Button>
            </div>
          </Div>
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  basket: state.basket,
  totalPrice: state.totalPrice
});
const mapDispatchToProps = dispatch => ({
  removeBasketItem: index => dispatch(removeBasketItem(index))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Basket)
);
