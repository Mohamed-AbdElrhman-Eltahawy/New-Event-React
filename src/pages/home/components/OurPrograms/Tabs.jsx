import OurProgramsComponent from "design-system/components/OurPrograms/OurPrograms";
import {
  tab1,
  tab2,
  tab3,
} from "design-system/components/OurPrograms/OurProgramsData";
import theme from "design-system/config";
import React, { useState } from "react";
import { Line, Span, Wrapper } from "./style";

export default function Tabs() {
  const [tab, setTab] = useState("tab1");

  const switchTab = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <Wrapper>
        <Span
          style={{
            color: tab === "tab1" ? theme.primary : "",
            borderBottom: tab === "tab1" ? `1px solid ${theme.black}` : "",
          }}
          onClick={() => switchTab("tab1")}
        >
          First Day
        </Span>
        <Span
          style={{
            color: tab === "tab2" ? theme.primary : "",
            borderBottom: tab === "tab2" ? `1px solid ${theme.black}` : "",
          }}
          onClick={() => switchTab("tab2")}
        >
          Second Day
        </Span>
        <Span
          style={{
            color: tab === "tab3" ? theme.primary : "",
            borderBottom: tab === "tab3" ? `1px solid ${theme.black}` : "",
          }}
          onClick={() => switchTab("tab3")}
        >
          Third Day
        </Span>
      </Wrapper>
      <Line />
      <div>
        {tab === "tab2"
          ? tab2.map((item) => {
              return (
                <OurProgramsComponent
                  name={item.name}
                  description={item.description}
                  roomNumber={item.roomNumber}
                  alt={item.alt}
                  img={item.img}
                  time={item.time}
                  title={item.title}
                  key={item.id}
                />
              );
            })
          : tab === "tab3"
          ? tab3.map((item) => {
              return (
                <OurProgramsComponent
                  name={item.name}
                  description={item.description}
                  roomNumber={item.roomNumber}
                  alt={item.alt}
                  img={item.img}
                  time={item.time}
                  title={item.title}
                  key={item.id}
                />
              );
            })
          : tab1.map((item) => {
              return (
                <OurProgramsComponent
                  name={item.name}
                  description={item.description}
                  roomNumber={item.roomNumber}
                  alt={item.alt}
                  img={item.img}
                  time={item.time}
                  title={item.title}
                  key={item.id}
                />
              );
            })}
      </div>
    </>
  );
}
