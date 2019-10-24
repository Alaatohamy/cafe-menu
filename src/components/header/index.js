import React from "react";
import { Link } from "react-router-dom";
import { MainHeader, HeaderTitle } from "./header.style";
import { Container } from "styles/general";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <Link to="/">
          <HeaderTitle>Cafe React</HeaderTitle>
        </Link>
      </Container>
    </MainHeader>
  );
};

export default Header;
