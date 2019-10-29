import React from "react";
import { Link } from "react-router-dom";
// import { CustomButton } from "components";
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
  // [TODO] change it to object
  const menu_data = [
    {
      key: 1,
      type: "Main Course",
      name: "Pizza Margherita",
      img: "",
      price: "5"
    },
    {
      key: 2,
      type: "Main Course",
      name: "Pizza Margherita",
      img: "",
      price: "5"
    },
    {
      key: 3,
      type: "Main Course",
      name: "Pizza Margherita",
      img: "",
      price: "5"
    },
    {
      key: 4,
      type: "Main Course",
      name: "Pizza Margherita",
      img: "",
      price: "5"
    },
    {
      key: 5,
      type: "Main Course",
      name: "Pizza Margherita",
      img: "",
      price: "5"
    }
  ];
  return (
    <section>
      <MenuHeader>
        <h2>Menu</h2>
        <Link to="/create-new-item">Add Menu Item</Link>
      </MenuHeader>
      <MenuList>
        {menu_data.map(({ key, name, type, img, price }) => (
          <MenuCard key={key}>
            {/* [TODO] check role */}
            <CardImg role="presentation" img={img} />
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
