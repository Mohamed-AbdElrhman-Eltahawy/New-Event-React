import React from "react";
import { P, Span, Title, VenueWrapper } from "./style";

export default function Venue() {
  return (
    <VenueWrapper>
      <div className="container">
        <Title>Venue</Title>
        <P>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
          volutpat.
        </P>
        <Span>New Event</Span>
        <Span>120 Market Street, Suite 110</Span>
        <Span>San Francisco, CA 10110</Span>
        <Span>Tel: 010-020-0120</Span>
      </div>
    </VenueWrapper>
  );
}
