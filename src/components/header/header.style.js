import styled from "styled-components";
import { textColor } from "styles/general";

export const MainHeader = styled.header`
  background-color: #fff;
  padding: 25px;
`;

export const HeaderContent = styled.div`
  @media (min-width: 2000px) {
    max-width: 2000px;
    margin: 0 auto;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 3px;
  color: ${textColor};
`;
