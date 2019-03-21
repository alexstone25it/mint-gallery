import React, { Component } from "react";
import Div from "../../../../../../General/containers/general/Div";
import PlainCard from "../../../../../../General/components/cards/PlainCards/PlainCard";

class Trio extends Component {
  render() {
    let picsArray = [];
    let pics = [];
    while (picsArray.length < 3) {
      let num = Math.floor(Math.random() * this.props.photoData.length);
      let group = this.props.photoData[num].photos;

      let num2 = Math.floor(Math.random() * group.length);
      let photo = group[num2];

      pics.push(photo);
      picsArray = Array.from(new Set(pics));
    }
    return (
      <Div containerSize="size100" containerDisplay="withFlexRow">
        {picsArray.map(item => (
          <PlainCard photo={item} key={`Trio${item.idKey}`} />
        ))}
      </Div>
    );
  }
}

export default Trio;
