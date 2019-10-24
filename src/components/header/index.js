import React from "react";
import { MainHeader, HeaderTitle } from "./header.style";
import { Container } from "styles/general";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <HeaderTitle>Cafe React</HeaderTitle>
      </Container>
    </MainHeader>
  );
};

export default Header;
