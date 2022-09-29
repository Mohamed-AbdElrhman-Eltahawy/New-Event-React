import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Description,
  IconWrapper,
  Image,
  ImageWrapper,
  Name,
  OurProgramsWrapper,
  RoomNumber,
  Title,
} from "./style";

export default function OurProgramsComponent({
  img,
  time,
  roomNumber,
  title,
  name,
  alt,
  description,
}) {
  return (
    <OurProgramsWrapper>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>
      <div>
        <IconWrapper>
          <div>
            <FontAwesomeIcon size="xs" icon={faClock} />
            <span>{time}</span>
          </div>
          <div>
            <FontAwesomeIcon
              style={{ padding: "0 0.4rem 0 0.4rem" }}
              size="xs"
              icon={faMapMarker}
            />
            <span>Room</span>
            <RoomNumber>{roomNumber}</RoomNumber>
          </div>
        </IconWrapper>

        <Title>{title}</Title>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </div>
    </OurProgramsWrapper>
  );
}
