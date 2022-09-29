import about from "images/about-us.jpg";
import { AboutUsWrapper, Div, DivTow, P, Span } from "./style";

export default function AboutUs() {
  return (
    <div className="container">
      <AboutUsWrapper>
        <Div>
          <Span>
            New Event is a fully responsive one-page template for events,
            conferences or workshops.
          </Span>
          <P>
            This is a Bootstrap v3.3.6 layout that is responsive and mobile
            friendly. You may download and modify this template for your
            website. Please tell your friends about templatemo.
          </P>
          <P>
            Quisque facilisis scelerisque venenatis. Nam vulputate ultricies
            luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet.
          </P>
        </Div>
        <DivTow>
          <img width="100%" src={about} alt="about-us" />
        </DivTow>
      </AboutUsWrapper>
    </div>
  );
}
