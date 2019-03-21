import React, { Component } from "react";

import Section from "../../../../../General/containers/general/Section";
import H2General from "../../../../../General/components/typography/headings/h2/H2General";
import CursiveSpan from "../../../../../General/components/typography/spans/CursiveSpan";
import Packages from "../../../../../General/containers/Packages/Packages";

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
