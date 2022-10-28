import styled from "@emotion/styled";
import theme from "design-system/config";

export const Wrapper = styled("div")`
  label: Wrapper;
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

export const AccordionWrapper = styled("div")`
  label: AccordionWrapper;
  width: 70%;
`;

export const Item = styled("div")`
  label: Item;
  margin-bottom: 10px;
  box-shadow: 0 3px 6px -4px #777;
`;

export const Title = styled("div")`
  label: Item;
  display: flex;
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.whiteSmoke};
`;

export const H2 = styled("h2")`
  label: H2;
  font-size: 1rem;
  color: ${theme.black};
`;

export const Content = styled("div")`
  label: Content;
  padding: 0 1rem;
  max-height: 0;
  overflow: hidden;
  transition: 0.6s all cubic-bezier(0, 1, 0, 1);
  &.show {
    height: auto;
    max-height: 9999px;
    transition: 0.6s all cubic-bezier(1, 0, 1, 0);
  }
`;

export const P = styled("p")`
  label: P;
  color: ${theme.gray};
  padding-bottom: 0.5rem;
`;
