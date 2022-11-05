import styled from "@emotion/styled";
import { theme } from "../../config";

export const OurProgramsWrapper = styled("div")`
  label: OurProgramsWrapper;
  display: flex;
  align-items: center;
  gap: 3rem;
`;
export const Image = styled("img")`
  label: Image;
  width: 100%;
  border-radius: 50%;
`;
export const ImageWrapper = styled("div")`
  label: ImageWrapper;
  padding: 2rem 0;
`;
export const IconWrapper = styled("div")`
  label: IconWrapper;
  display: flex;
  gap: 2rem;
  color: ${theme.gray};
`;
export const Title = styled("h2")`
  label: Title;
  margin: 0.4rem 0;
  color: ${theme.gray};
`;
export const Name = styled("span")`
  label: Name;
  display: block;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: ${theme.gray};
`;
export const Description = styled("span")`
  label: Description;
  display: block;
  line-height: 1.9;
  color: ${theme.gray};
`;
export const RoomNumber = styled("span")`
  label: RoomNumber;
  padding-left: 0.4rem;
`;
