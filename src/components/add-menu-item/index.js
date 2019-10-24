import React from "react";
import { CustomButton } from "components";
import {
  AddMenuFormSection,
  AddMenuFormWrapper,
  InputGroup,
  CustomSelectGroup,
  CustomImgUploader,
  CustomSelect,
  CustomInput
} from "./add-menu-item.style";

const AddMenuForm = () => {
  return (
    <AddMenuFormSection>
      <h2>Add Menu Item</h2>
      <AddMenuFormWrapper>
        <CustomSelectGroup>
          <label htmlFor="type">Type</label>
          <CustomSelect name="menu-item-type" id="type" required>
            <option value="">Choose type</option>
            <option value="side">Side</option>
            <option value="main_menu">Main Course</option>
          </CustomSelect>
        </CustomSelectGroup>
        <InputGroup>
          <label htmlFor="name">Name</label>
          <CustomInput id="name" type="text" name="name" required />
        </InputGroup>
        <InputGroup>
          <label htmlFor="price">Price</label>
          <CustomInput id="price" type="number" name="price" required min="0" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="photo">Photo</label>
          <CustomImgUploader id="photo" type="file" name="files[]" multiple />
          <CustomButton type="button">Choose photo</CustomButton>
        </InputGroup>
        <CustomButton>save Item</CustomButton>
      </AddMenuFormWrapper>
    </AddMenuFormSection>
  );
};

export default AddMenuForm;
