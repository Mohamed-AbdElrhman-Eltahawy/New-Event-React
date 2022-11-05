import React from "react";
import {
  ContactWrapper,
  DownLoadNow,
  FirstWord,
  FormWrapper,
  Input,
  InputsWrapper,
  P,
  SecondWord,
  SendNow,
  TextArea,
  Wrapper,
} from "./style";

export default function ContactUs() {
  return (
    <ContactWrapper>
      <div className="container">
        <Wrapper>
          <div style={{ width: "50%" }}>
            <FirstWord>New</FirstWord>
            <SecondWord>Event</SecondWord>
            <P>
              Proin sodales convallis urna eu condimentum. Morbi tincidunt augue
              eros, vitae pretium mi condimentum eget. Suspendisse eu turpis sed
              elit pretium congue.
            </P>
            <P>
              Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
              fringilla vestibulum. Praesent ullamcorper mauris fermentum turpis
              scelerisque rutrum eget eget turpis.
            </P>
            <P>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat. Lorem ipsum
            </P>
            <DownLoadNow>Download Now</DownLoadNow>
          </div>
          <FormWrapper>
            <div>
              <FirstWord>Keep In </FirstWord>
              <SecondWord>Touch</SecondWord>
              <form>
                <InputsWrapper>
                  <Input type="name" placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <TextArea placeholder="Message" />
                </InputsWrapper>
                <div>
                  <SendNow>Send Now</SendNow>
                </div>
              </form>
            </div>
          </FormWrapper>
        </Wrapper>
      </div>
    </ContactWrapper>
  );
}
