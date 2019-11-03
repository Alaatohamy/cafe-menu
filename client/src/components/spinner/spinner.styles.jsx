import styled, { css } from "styled-components";

const itemSpinnerOverlay = css`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-inline-start: 20px;
  vertical-align: middle;
`;

const sectionSpinnerOverlay = css`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const itemSpinnerContainer = css`
  width: 20px;
  height: 20px;
`;

const sectionSpinnerContainer = css`
  width: 50px;
  height: 50px;
`;

export const SpinnerOverlay = styled.div`
  ${({ item }) => (item ? itemSpinnerOverlay : sectionSpinnerOverlay)}
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  ${({ item }) => (item ? itemSpinnerContainer : sectionSpinnerContainer)}
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
