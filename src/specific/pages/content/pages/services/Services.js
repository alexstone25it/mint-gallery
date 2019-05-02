import React, { Component } from "react";

import Section from "../../../../../sharedComponents/boxes/Section";
import H2General from "../../../../../sharedComponents/typography/headings/h2/H2General";
import CursiveSpan from "../../../../../sharedComponents/typography/spans/CursiveSpan";
import Packages from "./Packages";

class Services extends Component {
  render() {
    return (
      <Section
        containerSize="size90"
        containerDisplay="withflexCol"
        containerColor="withOffWhite"
      >
        <H2General headingType="smaller">
          Services <CursiveSpan>By Mint Photography</CursiveSpan>
        </H2General>
        <Packages />
      </Section>
    );
  }
}

export default Services;
