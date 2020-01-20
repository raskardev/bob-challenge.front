import React from "react";

import {
  Container,
  NameText,
  FlightText,
  BagsText,
  FlightTextContainer,
  BagsTextContainer
} from "./styles";

const UserCard = ({ user }) => (
  <Container>
    <NameText>{user.name}</NameText>
    <FlightTextContainer>
      <FlightText>Flight ID: {user.flightId}</FlightText>
    </FlightTextContainer>
    <BagsTextContainer>
      <BagsText>You're carrying {user.bags} bags!</BagsText>
    </BagsTextContainer>
  </Container>
);

export default UserCard;
