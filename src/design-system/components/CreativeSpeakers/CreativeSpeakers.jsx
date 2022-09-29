import React from "react";
import { Name,Jobs, SpeakersWrapper } from "./style";
export default function CreativeSpeakers({ img, name, Job, alt }) {
  return (
    <SpeakersWrapper>
      <img src={img} alt={alt} width="100%" />
      <Name>{name}</Name>
      <Jobs>{Job}</Jobs>
    </SpeakersWrapper>
  );
}
