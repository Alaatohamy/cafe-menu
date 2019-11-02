import styled, { css } from "styled-components";
import { LikeBlueButton } from "components/custom-button/custom-button.style";
import { ReactComponent as DeleteIcon } from "assets/delete.svg";
import { ReactComponent as EditIcon } from "assets/edit.svg";

import {
  cols,
  col__3,
  textColor,
  primaryColor,
  secondaryColor,
  imgDefaultBackgroundColor
} from "styles/general";

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
`;

export const EndSection = styled.div`
  float: right;
`;

export const StartSection = styled.div`
  float: left;
`;

export const CardImg = styled.div`
  background: ${({ img }) => (img ? `url(${img})` : imgDefaultBackgroundColor)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;

  img {
    height: inherit;
    width: 100%;
  }
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
  margin: 0;
  text-align: center;
`;

export const icon = css`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-block-start: 10px;

  &:nth-child(n + 2) {
    margin-inline-start: 20px;
  }
`;

export const DeleteStyledIcon = styled(DeleteIcon)`
  ${icon}
  fill: red;
`;

export const EditStyledIcon = styled(EditIcon)`
  ${icon}
  fill: ${secondaryColor};
`;
