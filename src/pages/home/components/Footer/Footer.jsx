import {
  faBehance,
  faDribbble,
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { madeBy } from "design-system/config";
import { FooterWrapper, Li, MadBy, Span, Ul } from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div>
          <Span>Copyright © 2018 Your Company | Design:</Span>
          <MadBy>{madeBy}</MadBy>
        </div>
        <Ul>
          <Li>
            <FontAwesomeIcon icon={faFacebookF} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faTwitter} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faDribbble} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faBehance} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faGoogle} />
          </Li>
        </Ul>
      </div>
    </FooterWrapper>
  );
}
