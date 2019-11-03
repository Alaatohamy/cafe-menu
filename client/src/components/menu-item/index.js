import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "components";
import {
  MenuCard,
  CardImg,
  CardData,
  CardName,
  CardPrice,
  CardType,
  DeleteStyledIcon,
  EditStyledIcon,
  EndSection,
  StartSection
} from "components/menu-list/menu-list.style";

const MenuItem = ({
  id,
  name,
  type,
  image,
  price,
  handleDeleteItem,
  itemIsLoading,
  clickedItem
}) => {
  return (
    <MenuCard>
      {
        <CardImg
          img={image ? image.src : ""}
          title={image ? image.name : ""}
          role="presentation"
        ></CardImg>
      }
      <CardData>
        <StartSection>
          <CardName>{name}</CardName>
          <CardType>{type}</CardType>
        </StartSection>
        <EndSection>
          <CardPrice>${price}</CardPrice>
          <div>
            <Link to={`/edit-menu-item/${id}`}>
              <EditStyledIcon />
            </Link>
            {itemIsLoading && id === clickedItem ? (
              <Spinner item={true} />
            ) : (
              <DeleteStyledIcon onClick={() => handleDeleteItem(id)} />
            )}
          </div>
        </EndSection>
      </CardData>
    </MenuCard>
  );
};

export default MenuItem;
