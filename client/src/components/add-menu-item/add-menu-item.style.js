import styled, { css } from "styled-components";
import { secondaryColor, borderColor, textColor } from "styles/general";

// usable styling
export const groupStyling = css`
  margin-block-end: 30px;

  label {
    width: 123px;
    display: inline-block;
    color: ${textColor};
    font-size: 15px;
  }
`;
export const inputSelectStyling = css`
  min-width: 400px;
  width: 70%;
  padding: 10px;
  height: 40px;
  font-size: 13px;
  border: 1px solid ${borderColor};
`;

// Styled components
export const AddMenuFormSection = styled.section`
  font-size: 20px;

  h2 {
    font-size: 28px;
    color: ${textColor};
    font-weight: normal;
  }
`;

export const AddMenuFormWrapper = styled.form`
  width: 523px;
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
    border-top: 16px solid #707070;
    cursor: pointer;
  }
`;

export const CustomSelect = styled.select`
  ${inputSelectStyling}
  -webkit-appearance: none;
  border-color: ${borderColor};
  cursor: pointer;
  background-color: #fff;

  &:invalid {
    color: ${secondaryColor};
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

export const ImgName = styled.span`
  margin-inline-start: 10px;
`;
