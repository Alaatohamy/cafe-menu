import styled, { css } from "styled-components";

// usable styling
export const groupStyling = css`
  margin-block-end: 30px;

  label {
    width: 30%;
    display: inline-block;
  }
`;
export const inputSelectStyling = css`
  min-width: 400px;
  width: 70%;
  padding: 10px;
  height: 45px;
  font-size: 18px;
  border: 1px solid #dad7d7;
`;

// Styled components
export const AddMenuFormSection = styled.section`
  font-size: 20px;

  h2 {
    font-weight: normal;
  }
`;

export const AddMenuFormWrapper = styled.form`
  width: 45%;
`;

export const InputGroup = styled.div`
  ${groupStyling}
`;

export const CustomInput = styled.input`
  ${inputSelectStyling}
`;

export const CustomSelectGroup = styled.div`
  position: relative;
  ${groupStyling}

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
    margin: auto 0;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 16px solid #9e9e9e;
    cursor: pointer;
  }
`;

export const CustomSelect = styled.select`
  ${inputSelectStyling}
  -webkit-appearance: none;
  border-color: #dad7d7;
  cursor: pointer;

  &:invalid {
    color: grey;
  }
`;

export const CustomImgUploader = styled.input`
  width: 180px;
  height: 60px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
`;
