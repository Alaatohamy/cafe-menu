import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllItems,
  deleteItem
} from "api-functions/menu-list/menu-list.actions";
import MenuItem from "components/menu-item";
import { Spinner } from "components";
import { MenuHeader, MenuList } from "./menu-list.style";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemIsLoading, setItemIsLoading] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  /**If we use redux management state,
   * I'll prefer to isolate the side effects and api calls in saga and just call the action here
   * but no need for this is this small task
   */
  useEffect(() => {
    (async () => {
      await setMenuData(await getAllItems());
      setIsLoading(false);
    })();
  }, [itemIsLoading]);

  const handleDeleteItem = id => {
    setItemIsLoading(true);
    setClickedItem(id);
    (async () => {
      await deleteItem(id);
      const newItems = menuData.filter(item => item.id !== id);
      await setMenuData(newItems);
      setItemIsLoading(false);
    })();
  };

  console.log({ menuData });
  return (
    <section>
      <MenuHeader>
        <h2>Menu</h2>
        <Link to="/create-new-item">Add Menu Item</Link>
      </MenuHeader>
      <MenuList>
        {isLoading ? (
          <Spinner />
        ) : (
          menuData.map(({ key, ...otherProps }) => (
            <MenuItem
              key={key}
              id={key}
              itemIsLoading={itemIsLoading}
              clickedItem={clickedItem}
              {...otherProps}
              handleDeleteItem={handleDeleteItem}
            />
          ))
        )}
      </MenuList>
    </section>
  );
};

export default Menu;
