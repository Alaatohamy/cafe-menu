import styled from "styled-components";
import {
  cols,
  col__3,
  textColor,
  primaryColor,
  secondaryColor,
  imgDefaultBackgroundColor
} from "styles/general";
import { LikeBlueButton } from "components/custom-button/custom-button.style";

export const MenuHeader = styled.header`
  margin-block-start: 30px;
  margin-block-end: 30px;

  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }

  h2 {
    font-size: 28px;
    font-weight: normal;
    color: ${textColor};
    float: left;
  }

  a {
    float: right;
    ${LikeBlueButton}
  }
`;

export const MenuList = styled.ul`
  ${cols}
`;

export const MenuCard = styled.li`
  /* box-shadow: 1px 1px 15px 0px #d8d5d5; */
  ${col__3}
  &:nth-child(n + 4) {
    margin-block-start: 20px;
  }
`;

export const CardData = styled.div`
  color: ${secondaryColor};
  background-color: #fff;
  padding: 25px;
  text-transform: capitalize;
  font-size: 20px;

  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }

  div {
    float: left;
  }
`;

export const CardImg = styled.div`
  background-color: ${imgDefaultBackgroundColor};
  height: 250px;
`;

export const CardName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const CardType = styled.p`
  color: ${primaryColor};
  font-weight: bold;
  font-size: 23px;
  margin: 0;
`;

export const CardPrice = styled.p`
  font-size: 22px;
  float: right;
  margin: 0;
`;
