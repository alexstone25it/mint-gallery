import React, { Component } from "react";
import Div from "../../../../../../sharedComponents/boxes/Div";
import PlainCard from "../../../../../../sharedComponents/cards/PlainCards/PlainCard";

class Trio extends Component {
  render() {
    let picsArray = [];
    let pics = [];
    while (picsArray.length < 3) {
      let num = Math.floor(Math.random() * this.props.photoData.length);

      pics.push(this.props.photoData[num]);
      picsArray = Array.from(new Set(pics));
    }
    return (
      <Div containerSize="size100" containerDisplay="withFlexRow">
        {picsArray.map(item => (
          <PlainCard photo={item} key={`Trio${item.id}`} />
        ))}
      </Div>
    );
  }
}

export default Trio;
