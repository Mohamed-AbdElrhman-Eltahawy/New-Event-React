import {
  ColoredTitle,
  FormWrapper,
  RegisterButton,
  RegisterContainer,
  RegisterHereWrapper,
  RegisterInput,
  Text,
  TextTwo,
  Title,
} from "./style";

export default function RegisterHere() {
  return (
    <RegisterHereWrapper>
      <div className="container">
        <RegisterContainer>
          <div style={{ width: "60%" }}>
            <Title>Register</Title>
            <ColoredTitle>Here</ColoredTitle>
            <Text>
              Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed
              pulvinar est sit amet tellus iaculis hendrerit.
            </Text>
            <TextTwo>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat. Lorem ipsum dolor sit amet consectetuer diam
              nonummy.
            </TextTwo>
          </div>
          <FormWrapper style={{ width: "35%" }}>
            <RegisterInput type="text" placeholder="First Name" />
            <RegisterInput type="text" placeholder="Last Name" />
            <RegisterInput type="number" placeholder="Phone Number" />
            <RegisterInput type="email" placeholder="Email Address" />
          </FormWrapper>
        </RegisterContainer>
        <div style={{ textAlign: "right" }}>
          <RegisterButton>Register</RegisterButton>
        </div>
      </div>
    </RegisterHereWrapper>
  );
}
