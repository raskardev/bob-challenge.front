import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import { Container, ContentContainer } from "./styles";

const Layout = ({ children }) => (
  <Container>
    <Header />
    <ContentContainer>{children}</ContentContainer>
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
