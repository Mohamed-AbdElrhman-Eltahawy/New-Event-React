import { useState } from "react";
import { data } from "./data";
import {
  AccordionWrapper,
  Content,
  H2,
  Item,
  P,
  Title,
  Wrapper,
} from "./style";

export default function Accordion() {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  return (
    <div style={{ height: "350px", margin: "2rem 0" }}>
      <Wrapper>
        <AccordionWrapper>
          {data.map((item, i) => {
            return (
              <Item key={i} onClick={() => toggle(i)}>
                <Title>
                  <H2>{item.question}</H2>
                  <span>{active === i ? "-" : "+"}</span>
                </Title>
                <Content className={active === i ? "show" : ""}>
                  <P>{item.answerTwo}</P>
                  <P>{item.answerTwo}</P>
                </Content>
              </Item>
            );
          })}
        </AccordionWrapper>
      </Wrapper>
    </div>
  );
}
