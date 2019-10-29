import React from "react";
import { Link } from "react-router-dom";
import { MainHeader, HeaderTitle, HeaderContent } from "./header.style";

const Header = () => {
  return (
    <MainHeader>
      <HeaderContent>
        <Link to="/">
          <HeaderTitle>Cafe React</HeaderTitle>
        </Link>
      </HeaderContent>
    </MainHeader>
  );
};

export default Header;
