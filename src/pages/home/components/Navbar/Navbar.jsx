import NavItems from "./NavItems";
import {
  Event,
  LinksWrapper,
  NavbarWrapper,
  NavContainer,
  NavTitle,
} from "./style";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="container">
        <NavContainer>
          <div>
            <NavTitle>
              New <Event>Event</Event>
            </NavTitle>
          </div>
          <LinksWrapper>
            <NavItems />
          </LinksWrapper>
        </NavContainer>
      </div>
    </NavbarWrapper>
  );
}
