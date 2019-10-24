import styled, { css } from "styled-components";

const blue = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #fff;
    color: #4285f4;
  }
`;

export const Button = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  ${blue}
`;
