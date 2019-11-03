import styled from "styled-components";
import { imgDefaultBackgroundColor } from "styles/general";

export const ThumbnailImg = styled.div`
  width: 250px;
  height: 250px;
  margin-inline-start: 123px;
  margin-block-start: 20px;
  background: ${({ img }) => (img ? `url(${img})` : imgDefaultBackgroundColor)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 10px 3px #d2cccc;
`;
