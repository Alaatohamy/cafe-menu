import styled, { css } from "styled-components";
import { buttonColor } from "styles/general";

const blue = css`
  background-color: ${buttonColor};
  border: 1px solid ${buttonColor};

  &:hover {
    background-color: #fff;
    color: ${buttonColor};
  }
`;

export const LikeBlueButton = css`
  padding: 12px 25px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  ${blue}

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: wait;
  }
`;

export const Button = styled.button`
  ${LikeBlueButton}
`;
