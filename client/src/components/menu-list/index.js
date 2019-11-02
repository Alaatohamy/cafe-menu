import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllItems, deleteItem } from "api-functions/menu-list";
import {
  MenuHeader,
  MenuList,
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
} from "./menu-list.style";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  /**If we use redux management state,
   * I'll prefer to isolate the side effects and api calls in saga and just call the action here
   * but no need for this is this small task
   */
  useEffect(() => {
    (async () => {
      setMenuData(await getAllItems());
    })();
  }, []);

  const handleDeleteItem = async id => {
    await deleteItem(id);
    setMenuData(await getAllItems());
  };

  console.log({ menuData });
  return (
    <section>
      <MenuHeader>
        <h2>Menu</h2>
        <Link to="/create-new-item">Add Menu Item</Link>
      </MenuHeader>
      <MenuList>
        {menuData
          ? menuData.map(({ key, name, type, image, price }) => (
              <MenuCard key={key}>
                {/* [TODO] check role */}
                <CardImg
                  img={image.src}
                  title={image.name}
                  role="presentation"
                ></CardImg>
                <CardData>
                  <StartSection>
                    <CardName>{name}</CardName>
                    <CardType>{type}</CardType>
                  </StartSection>
                  <EndSection>
                    <CardPrice>${price}</CardPrice>
                    <div>
                      <Link to={`/edit-menu-item/${key}`}>
                        <EditStyledIcon />
                      </Link>
                      <DeleteStyledIcon onClick={() => handleDeleteItem(key)} />
                    </div>
                  </EndSection>
                </CardData>
              </MenuCard>
            ))
          : null}
      </MenuList>
    </section>
  );
};

export default Menu;
