import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "firebase-config/utils";
import {
  MenuHeader,
  MenuList,
  MenuCard,
  CardImg,
  CardData,
  CardName,
  CardPrice,
  CardType
} from "./menu-list.style";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  /**If we use redux management state,
   * I'll prefer to isolate the side effects and api calls in saga and just call the action here
   * but no need for this is this small task
   */
  useEffect(() => {
    (async () => {
      const collectionRef = await firestore.collection("menu-items");
      const collectionSnapshot = await collectionRef.get();
      const data = await collectionSnapshot.docs.map(item => ({
        key: item.id,
        ...item.data()
      }));
      setMenuData(data);
    })();
  }, []);

  return (
    <section>
      <MenuHeader>
        <h2>Menu</h2>
        <Link to="/create-new-item">Add Menu Item</Link>
      </MenuHeader>
      <MenuList>
        {menuData.map(({ key, name, type, image, price }) => (
          <MenuCard key={key}>
            {/* [TODO] check role */}
            <CardImg role="presentation" img={image} />
            <CardData>
              <div>
                <CardName>{name}</CardName>
                <CardType>{type}</CardType>
              </div>
              <CardPrice>${price}</CardPrice>
            </CardData>
          </MenuCard>
        ))}
      </MenuList>
    </section>
  );
};

export default Menu;
