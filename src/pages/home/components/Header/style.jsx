import styled from "@emotion/styled";
import theme from "design-system/config";
import header from "images/intro-bg.jpg";

export const HeaderWrapper = styled("section")`
  label: HeaderWrapper;
  height: 700px;
  padding: 20% 0;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${header}) fixed;
`;
export const H3 = styled("h3")`
  label: H3;
  font-size: 1.5rem;
  color: ${theme.white};
`;
export const Title = styled("h1")`
  label: Title;
  font-size: 3rem;
  color: ${theme.white};
`;
export const LearnMore = styled("button")`
  label: LearnMore;
  font-size: 1rem;
  margin-right: 2rem;
  padding: 1rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  color: ${theme.secondary};
  background: ${theme.white};
  border: 1px solid ${theme.white};
  transition: all 0.3s;
  :hover {
    color: ${theme.white};
    background: ${theme.primary};
    border: 1px solid ${theme.primary};
  }
`;
export const Register = styled("button")`
  label: Register;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 3rem;
  border-radius: 5px;
  color: ${theme.white};
  background: ${theme.primary};
  border: 1px solid ${theme.primary};
  transition: all 0.3s;

  :hover {
    color: ${theme.secondary};
    background: ${theme.white};
    border: 1px solid ${theme.white};
  }
`;
