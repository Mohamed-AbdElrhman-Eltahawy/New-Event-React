import styled from "@emotion/styled";
import { theme } from "design-system/config";
import venue from "images/venue.jpg";

export const VenueWrapper = styled("section")`
  label: VenueHereWrapper;
  height: 400px;
  padding: 4rem 0 2rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${venue}) fixed;
`;

export const Title = styled("h2")`
  label: Title;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;

export const P = styled("p")`
  label: P;
  width: 400px;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: ${theme.gray};
`;

export const Span = styled("span")`
  label: Span;
  display: block;
  font-size: 1rem;
  padding: 0.5rem 0;
  font-weight: bold;
  color: ${theme.black};
`;
