import React from "react";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="basket-container">
      <p className="basket-title">Cart</p>
      <hr />
      <p className="product">Your Cart is empty</p>
    </div>
  );
};
export default CartItem;
