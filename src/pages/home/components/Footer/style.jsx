import styled from "@emotion/styled";
import { theme } from "design-system/config";

export const FooterWrapper = styled("footer")`
  label: FooterWrapper;
  padding: 5rem;
  text-align: center;
`;

export const Span = styled("span")`
  label: Span;
  color: ${theme.gray};
`;

export const MadBy = styled("span")`
  label: MadBy;
  font-weight: bold;
  color: ${theme.primary};
`;

export const Ul = styled("ul")`
  label: Ul;
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const Li = styled("li")`
  label: Li;
  width: 20px;
  height: 20px;
  display: flex;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  color: ${theme.gray};
  transition: 0.4s all;
  justify-content: center;
  :hover {
    color: ${theme.white};
    background-color: ${theme.primary};
  }
`;
