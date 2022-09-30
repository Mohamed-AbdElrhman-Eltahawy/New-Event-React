import styled from "@emotion/styled";
import theme from "design-system/config";
import register from "images/register-bg.jpg";

export const RegisterHereWrapper = styled("section")`
  label: RegisterHereWrapper;
  height: 400px;
  padding: 4rem 0 2rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${register}) fixed;
`;
export const RegisterContainer = styled("div")`
  label: RegisterContainer;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Title = styled("span")`
  label: Title;
  font-size: 2rem;
  padding-right: 0.3rem;
  color: ${theme.white};
`;
export const ColoredTitle = styled("span")`
  label: ColoredTitle;
  font-size: 2rem;
  color: ${theme.primary};
`;
export const Text = styled("p")`
  label: Text;
  font-size: 1.5rem;
  color: ${theme.white};
`;
export const TextTwo = styled("p")`
  label: TextTwo;
  color: ${theme.gray};
`;
export const FormWrapper = styled("div")`
  label: FormWrapper;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RegisterInput = styled("input")`
  label: RegisterInput;
  padding: 0.6rem;
  border-radius: 5px;
  color: ${theme.white};
  border: 2px solid ${theme.white};
  background-color: transparent;
  ::placeholder {
    font-size: 1rem;
  }
`;

export const RegisterButton = styled("button")`
  label: RegisterButton;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 3rem;
  border-radius: 25px;
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
