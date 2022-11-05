import styled from "@emotion/styled";
import theme from "design-system/config";
import contact from "images/contact.jpg";

export const ContactWrapper = styled("section")`
  label: VenueHereWrapper;
  height: 600px;
  padding: 4rem 0 2rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${contact}) fixed;
`;

export const Wrapper = styled("div")`
  label: Wrapper;
  display: flex;
  gap: "1rem";
  align-items: center;
  justify-content: flex-start;
`;

export const FirstWord = styled("span")`
  label: FirstWord;
  font-size: 2.3rem;
  font-weight: bold;
  color: ${theme.secondary};
`;

export const SecondWord = styled("span")`
  label: SecondWord;
  font-size: 2.3rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${theme.primary};
`;

export const P = styled("p")`
  label: P;
  width: 80%;
  display: block;
  line-height: 1.3;
  color: ${theme.gray};
`;

export const DownLoadNow = styled("button")`
  label: DownLoadNow;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 3rem;
  margin-top: 3rem;
  border-radius: 25px;
  color: ${theme.white};
  background: ${theme.primary};
  border: 1px solid ${theme.primary};
  transition: all 0.3s;
  :hover {
    color: ${theme.white};
    background: ${theme.black};
    border: 1px solid ${theme.white};
  }
`;

export const FormWrapper = styled("div")`
  label: FormWrapper;
  padding: 6rem;
  border-radius: 13%;
  background-color: ${theme.white};
`;

export const InputsWrapper = styled("div")`
  label: InputsWrapper;
  gap: 1rem;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
`;
export const Input = styled("input")`
  label: Input;
  border: none;
  outline: none;
  font-size: 1.2rem;
  background-color: ${theme.white};
`;

export const TextArea = styled("textarea")`
  label: Input;
  outline: none;
  border: none;
  font-size: 1.2rem;
  background-color: ${theme.white};
`;

export const SendNow = styled("button")`
  label: SendNow;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 3rem;
  margin-top: 3rem;
  border-radius: 25px;
  color: ${theme.white};
  background: ${theme.primary};
  border: 1px solid ${theme.primary};
  transition: all 0.3s;
  :hover {
    color: ${theme.white};
    background: ${theme.black};
    border: 1px solid ${theme.white};
  }
`;
