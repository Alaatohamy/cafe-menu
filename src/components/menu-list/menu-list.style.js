import styled from "styled-components";
import { cols, col__3 } from "styles/general";

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
    font-weight: normal;
    float: left;
  }

  button {
    float: right;
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
  color: grey;
  background-color: #fff;
  padding: 20px;
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
  background-color: #000;
  height: 250px;
`;

export const Type = styled.p`
  color: #000;
  font-weight: bold;
`;

export const Price = styled.p`
  float: right;
`;
