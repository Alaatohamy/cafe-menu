import React, { useState } from "react";
import { CustomButton } from "components";
import { addNewItem } from "api-functions/menu-list/menu-list.actions";
import { ITEM_INIT_STATE } from "api-functions/menu-list/utils";
import {
  AddMenuFormSection,
  AddMenuFormWrapper,
  InputGroup,
  CustomSelectGroup,
  CustomImgUploader,
  CustomSelect,
  CustomInput,
  ImgName
} from "./add-menu-item.style";

const AddMenuForm = ({ history }) => {
  const [newItem, setNewItem] = useState(ITEM_INIT_STATE);
  const [disabledButton, setDisabledButton] = useState(false);

  const handleOnSubmit = async e => {
    e.preventDefault();
    setDisabledButton(true);
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

  const handleFileChange = e => {
    setNewItem({
      ...newItem,
      image: {
        ...newItem.image,
        file: e.target.files[0],
        name: e.target.files[0].name
      }
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
            onChange={handleFileChange}
          />
          <CustomButton type="button">Choose photo</CustomButton>
          {newItem.image.file ? (
            <ImgName>{newItem.image.file.name}</ImgName>
          ) : null}
        </InputGroup>
        <CustomButton disabled={disabledButton}>save Item</CustomButton>
      </AddMenuFormWrapper>
    </AddMenuFormSection>
  );
};

export default AddMenuForm;
