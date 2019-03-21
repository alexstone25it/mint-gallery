import React, { Component } from "react";

import Div from "../general/Div";
import PackageCard from "../../components/cards/PackageCards/PackageCard";

class Packages extends Component {
  render() {
    const packageList = [
      {
        name: "wed",
        title: "Wedding Photography",
        desc: "Photographs for you to treasure for the days after"
      },
      {
        name: "fam",
        title: "Family Album",
        desc: "Remember every moment"
      },
      {
        name: "profile",
        title: "Profile Shots",
        desc: "For any reason or no reason at all"
      },
      {
        name: "prof",
        title: "Professional Portfolio",
        desc:
          "From modelling to business photos, Mint can capture the look you need"
      }
    ];
    return (
      <Div containerDisplay="withGrid" extras="packageSet">
        <PackageCard data={packageList} />
      </Div>
    );
  }
}

export default Packages;
