import React from "react";
import "./CartItem.scss";

const CartItem = ({ items, setItems }) => {
  console.log({ items });
  return (
    <div className="basket-container">
      <p className="basket-title">Cart</p>
      <hr />

      {items.count > 0 ? (
        "the item is" + items.count
      ) : (
        <p className="product">Your Cart is empty</p>
      )}
    </div>
  );
};

export default CartItem;
