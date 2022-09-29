import styled from "@emotion/styled";
import theme from "../../config";

export const SpeakersWrapper = styled("div")`
  label: SpeakersWrapper;
  color: ${theme.gray};
  width: 285px;
  text-align: center;
`;
export const Name = styled("h2")`
  label: Name;
  color: ${theme.black};
  font-size: 1.2rem;
`;
export const Jobs = styled("span")`
  label: Jobs;
  color: ${theme.gray};
  font-size: 0.9rem;
`;
