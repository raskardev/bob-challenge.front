import React from "react";

import { useHistory } from "react-router-dom";

import {
  Container,
  LogoContainer,
  Logo,
  ContentContainer,
  ButtonContainer,
  Button
} from "./styles";

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <LogoContainer>
          <Logo src='/logo.jpg' alt='Logo' onClick={() => history.push("/")} />
        </LogoContainer>
        <ButtonContainer>
          <Button onClick={() => history.push("/new")}>New bag!</Button>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default Header;
