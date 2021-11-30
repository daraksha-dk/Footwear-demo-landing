import React from "react";
import IconCart from "../images/icon-cart.svg";
import "./AddCart.scss";

const AddCart = () => {
  return (
    <div>
      <button className="add-cart">
        <img className="addcart" src={IconCart} alt="icon-cart" />
        Add to cart
      </button>
    </div>
  );
};
export default AddCart;
