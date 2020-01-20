import React from "react";

import { Container, InfoContainer, InfoText } from "./styles";

const Footer = () => (
  <Container>
    <InfoContainer>
      <InfoText>Bob Challenge &copy;{new Date().getFullYear()}</InfoText>
    </InfoContainer>
  </Container>
);

export default Footer;
