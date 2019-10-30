import React, { useState, useEffect } from "react";
import { editItem, getItemData } from "api-functions/menu-list";
import { CustomButton } from "components";
import {
  AddMenuFormSection,
  AddMenuFormWrapper,
  InputGroup,
  CustomSelectGroup,
  CustomImgUploader,
  CustomSelect,
  CustomInput
} from "components/add-menu-item/add-menu-item.style";

const EditMenuItem = ({ history, match }) => {
  const itemId = match.params.itemId;
  const [updatedItem, setUpdatedItem] = useState({
    name: "",
    type: "",
    price: 0,
    image: ""
  });

  useEffect(() => {
    (async () => {
      const oldItem = await getItemData(itemId);
      setUpdatedItem(oldItem);
    })();
  }, [itemId]);

  const handleOnSubmit = async e => {
    e.preventDefault();
    await editItem(itemId, updatedItem);
    history.push("/");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdatedItem({
      ...updatedItem,
      [name]: value
    });
  };

  return (
    <AddMenuFormSection>
      <h2>Add Menu Item</h2>
      <AddMenuFormWrapper onSubmit={handleOnSubmit}>
        <CustomSelectGroup>
          <label htmlFor="type">Type</label>
          <CustomSelect
            name="type"
            id="type"
            required
            onChange={handleChange}
            value={updatedItem.type}
          >
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
            value={updatedItem.name}
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
            value={updatedItem.price}
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

export default EditMenuItem;