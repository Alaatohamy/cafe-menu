import React, { useState, useEffect } from "react";
import {
  editItem,
  getItemData
} from "api-functions/menu-list/menu-list.actions";
import { ITEM_INIT_STATE } from "api-functions/menu-list/utils";

import { CustomButton } from "components";
import { Spinner } from "components";
import {
  AddMenuFormSection,
  AddMenuFormWrapper,
  InputGroup,
  CustomSelectGroup,
  CustomImgUploader,
  CustomSelect,
  CustomInput,
  ImgName
} from "components/add-menu-item/add-menu-item.style";
import { ThumbnailImg } from "./edit-menu-item.style";

const EditMenuItem = ({ history, match }) => {
  const itemId = match.params.itemId;
  const [updatedItem, setUpdatedItem] = useState(ITEM_INIT_STATE);
  const [disabledButton, setDisabledButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const oldItem = await getItemData(itemId);
      setUpdatedItem(oldItem);
      setIsLoading(false);
    })();
  }, [itemId]);

  const handleOnSubmit = async e => {
    e.preventDefault();
    setDisabledButton(true);
    await editItem(itemId, updatedItem);
    history.push("/");
  };

  const handleFileChange = e => {
    setUpdatedItem({
      ...updatedItem,
      image: {
        ...updatedItem.image,
        file: e.target.files[0],
        name: e.target.files[0].name,
        src: ""
      }
    });
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
      {isLoading ? (
        <Spinner />
      ) : (
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
              onChange={handleFileChange}
            />
            <CustomButton type="button">Choose photo</CustomButton>
            <ImgName>{updatedItem.image.name}</ImgName>
            <ThumbnailImg img={updatedItem.image.src} />
          </InputGroup>
          <CustomButton disabled={disabledButton}>save Item</CustomButton>
        </AddMenuFormWrapper>
      )}
    </AddMenuFormSection>
  );
};

export default EditMenuItem;
