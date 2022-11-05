import styled from "@emotion/styled";
import { theme } from "design-system/config";

export const CreativeSpeakersWrapper = styled("section")`
  label: CreativeSpeakersWrapper;
  padding: 3rem 0;
  text-align: center;
  background-color: ${theme.whiteSmoke};
`;
export const Creative = styled("span")`
  label: Creative;
  font-size: 2rem;
  padding-right: 1rem;
  font-weight: bold;
  color: ${theme.secondary};
`;
export const Speakers = styled("span")`
  label: Speakers;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;
export const Description = styled("p")`
  label: Description;
  color: ${theme.gray};
`;
export const SliderWrapper = styled("div")`
  label: SliderWrapper;
  padding: 2rem 0;
`;
