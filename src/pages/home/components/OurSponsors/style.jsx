import styled from "@emotion/styled";
import { theme } from "design-system/config";

export const OurSponsorsWrapper = styled("section")`
  label: VenueHereWrapper;
  padding: 4rem 0 2rem 0;
`;

export const Wrapper = styled("div")`
  label: Wrapper;
  padding: 4rem 0;
  text-align: center;
`;

export const FirstWord = styled("span")`
  label: FirstWord;
  font-size: 2.3rem;
  font-weight: bold;
  padding-right: 0.5rem;
  color: ${theme.secondary};
`;
export const SecondWord = styled("span")`
  label: SecondWord;
  font-size: 2.3rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${theme.primary};
`;

export const Description = styled("p")`
  label: Description;
  color: ${theme.gray};
`;

export const SectionWrapper = styled("div")`
  label: Wrapper;
  gap: 1rem;
  display: flex;
  align-items: center;
`;
