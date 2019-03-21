import React, { Component } from "react";
import styles from "./FlipCard.module.css";

class FlipCard extends Component {
  render() {
    function getFrontClasses(n) {
      const frontClasses = [];
      frontClasses.push(styles.front);
      if (n === "girl") {
        frontClasses.push(styles.yFront);
        frontClasses.push(styles.gridItem1);
        return frontClasses.join(" ");
      } else if (n === "squirrel") {
        frontClasses.push(styles.xFront);
        frontClasses.push(styles.gridItem2);
        return frontClasses.join(" ");
      } else if (n === "home") {
        frontClasses.push(styles.xFront);
        frontClasses.push(styles.gridItem3);
        return frontClasses.join(" ");
      } else if (n === "waterfall") {
        frontClasses.push(styles.xFrontOpp);
        frontClasses.push(styles.gridItem4);
        return frontClasses.join(" ");
      } else if (n === "nightCliffside") {
        frontClasses.push(styles.xFront);
        frontClasses.push(styles.gridItem5);
        return frontClasses.join(" ");
      } else if (n === "path") {
        frontClasses.push(styles.yFront);
        frontClasses.push(styles.gridItem6);
        return frontClasses.join(" ");
      } else if (n === "frog") {
        frontClasses.push(styles.yFrontOpp);
        frontClasses.push(styles.gridItem7);
        return frontClasses.join(" ");
      } else if (n === "cliff") {
        frontClasses.push(styles.xFrontOpp);
        frontClasses.push(styles.gridItem8);
        return frontClasses.join(" ");
      } else if (n === "smile") {
        frontClasses.push(styles.yFrontOpp);
        frontClasses.push(styles.gridItem9);
        return frontClasses.join(" ");
      } else if (n === "toddler") {
        frontClasses.push(styles.xFront);
        frontClasses.push(styles.gridItem10);
        return frontClasses.join(" ");
      }
    }
    function getBackClasses(n) {
      const backClasses = [];
      backClasses.push(styles.back);
      if (n === "girl" || n === "path") {
        backClasses.push(styles.yBack);
        return backClasses.join(" ");
      }
      if (
        n === "squirrel" ||
        n === "home" ||
        n === "nightCliffside" ||
        n === "toddler"
      ) {
        backClasses.push(styles.xBack);
        return backClasses.join(" ");
      }
      if (n === "waterfall" || n === "cliff") {
        backClasses.push(styles.xBackOpp);
        return backClasses.join(" ");
      }
      if (n === "frog" || n === "smile") {
        backClasses.push(styles.yBackOpp);
        return backClasses.join(" ");
      }
    }

    return this.props.showCaseData.map((_, index) => (
      <div
        className={getFrontClasses(this.props.showCaseData[index].idKey)}
        key={this.props.showCaseData[index].idKey}
      >
        <img
          className={styles.img}
          src={require(`../../../assets/Images/${
            this.props.showCaseData[index].src
          }.jpg`)}
          alt={this.props.showCaseData[index].alt}
        />

        <div className={getBackClasses(this.props.showCaseData[index].idKey)}>
          <p className={styles.collectionTitle}>
            {this.props.showCaseData[index].collectionTitle}
          </p>
        </div>
      </div>
    ));
  }
}

export default FlipCard;
