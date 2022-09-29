import React from "react";
import {
  Description,
  Our,
  OurProgramsWrapper,
  Programs,
  TabsWrapper,
} from "./style";
import Tabs from "./Tabs";

export default function OurPrograms() {
  return (
    <div className="container">
      <OurProgramsWrapper>
        <div>
          <Our>Our</Our>
          <Programs>Programs</Programs>
          <Description>
            Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
            at, vehicula finibus massa. Sed tincidunt metus sed eleifend
            suscipit.
          </Description>
        </div>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
      </OurProgramsWrapper>
    </div>
  );
}
