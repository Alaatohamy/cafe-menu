import React, { useState } from "react";
import { CustomButton } from "components";
import { addNewItem } from "api-functions/menu-list";
import {
  AddMenuFormSection,
  AddMenuFormWrapper,
  InputGroup,
  CustomSelectGroup,
  CustomImgUploader,
  CustomSelect,
  CustomInput
} from "./add-menu-item.style";

const AddMenuForm = ({ history }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    type: "",
    price: 0,
    image: ""
  });

  const handleOnSubmit = async e => {
    e.preventDefault();
    await addNewItem(newItem);
    history.push("/");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  return (
    <AddMenuFormSection>
      <h2>Add Menu Item</h2>
      <AddMenuFormWrapper onSubmit={handleOnSubmit}>
        <CustomSelectGroup>
          <label htmlFor="type">Type</label>
          <CustomSelect name="type" id="type" required onChange={handleChange}>
            <option value="">Choose type</option>
            <option value="Side">Side</option>
            <option value="Main Course">Main Course</option>
          </CustomSelect>
        </CustomSelectGroup>
        <InputGroup>
          <label htmlFor="name">Name</label>
          <CustomInput
            id="name"
            type="text"
            name="name"
            required
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="price">Price</label>
          <CustomInput
            id="price"
            type="number"
            name="price"
            required
            min="0"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="image">Photo</label>
          <CustomImgUploader
            id="image"
            type="file"
            name="image"
            onChange={handleChange}
          />
          <CustomButton type="button">Choose photo</CustomButton>
        </InputGroup>
        <CustomButton>save Item</CustomButton>
      </AddMenuFormWrapper>
    </AddMenuFormSection>
  );
};

export default AddMenuForm;