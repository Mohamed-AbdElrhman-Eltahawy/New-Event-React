import React from "react";
import { SpeakersWrapper } from "./style";
export default function CreativeSpeakers({ img, name, Job,alt }) {
  return (
    <SpeakersWrapper>
      <img src={img} alt={alt} width="100%" />
      <h2>{name}</h2>
      <span>{Job}</span>
    </SpeakersWrapper>
  );
}
