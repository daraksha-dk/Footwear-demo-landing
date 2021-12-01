import React, { useState } from "react";
import IconCart from "../images/icon-cart.svg";
import "./AddCart.scss";

const AddCart = ({ items, setItems }) => {
  return (
    <div>
      <button
        className="add-cart"
        onClick={() =>
          setItems({
            count: items.count + 1,
            items: [
              ...items.items,
              {
                id: items.items.length + 1,
                name: "New Item",
                price: 0,
                quantity: 1,
              },
            ],
          })
        }
      >
        <img className="addcart" src={IconCart} alt="icon-cart" />
        Add to cart
      </button>
    </div>
  );
};
export default AddCart;
