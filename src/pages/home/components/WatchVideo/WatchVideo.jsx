import { Div, DivTow, P, Span, SubTitle, WatchVideoWrapper } from "./style";

const Link = "https://www.youtube.com/embed/XDPwXQjAlB0";
export default function WatchVideo() {
  return (
    <div className="container">
      <WatchVideoWrapper>
        <Div>
          <Span>WATCH VIDEO</Span>
          <SubTitle>
            Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
            at, vehicula finibus massa. Sed tincidunt metus sed eleifend
            suscipit.
          </SubTitle>
          <P>
            Quisque facilisis scelerisque venenatis. Nam vulputate ultricies
            luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet.
          </P>
        </Div>
        <DivTow>
          <iframe
            width="100%"
            height="350px"
            src={Link}
            frameborder="0"
          ></iframe>
        </DivTow>
      </WatchVideoWrapper>
    </div>
  );
}
