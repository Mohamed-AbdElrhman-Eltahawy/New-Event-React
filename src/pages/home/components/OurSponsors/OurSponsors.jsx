import OurSponsors from "design-system/components/OurSponsors";
import React from "react";
import ourSponsors from "./OurSponsorsData";
import {
  Description,
  FirstWord,
  OurSponsorsWrapper,
  SecondWord,
  SectionWrapper,
  Wrapper,
} from "./style";

export default function OurSponsorsComponent() {
  return (
    <OurSponsorsWrapper>
      <div className="container">
        <Wrapper>
          <FirstWord>
            Our
            <SecondWord>Sponsors</SecondWord>
          </FirstWord>
          <Description>
            Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
            imperdiet.
          </Description>
        </Wrapper>
        <SectionWrapper>
          {ourSponsors.map((sponsor) => {
            return (
              <OurSponsors
                src={sponsor.src}
                alt={sponsor.alt}
                key={sponsor.id}
              />
            );
          })}
        </SectionWrapper>
      </div>
    </OurSponsorsWrapper>
  );
}
