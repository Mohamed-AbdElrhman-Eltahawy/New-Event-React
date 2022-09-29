import React from "react";
import Slider from "./Slider";
import {
  Creative,
  CreativeSpeakersWrapper,
  Description,
  SliderWrapper,
  Speakers,
} from "./style";

export default function CreativeSpeakersComponent() {
  return (
    <CreativeSpeakersWrapper>
      <div className="container">
        <div>
          <Creative>Creative</Creative>
          <Speakers>Speakers</Speakers>
          <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </Description>
        </div>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
      </div>
    </CreativeSpeakersWrapper>
  );
}
