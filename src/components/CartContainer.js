import React, { useState } from "react";
import "./CartContainer.scss";
import IconCart from "../images/icon-cart.svg";
const CartContainer = ({ items, setItems }) => {
  const [count, setCount] = useState(items.count || 0);

  return (
    <>
      <div className="cart-container">
        <button onClick={() => setCount(count - 1)} className="decrease-btn">
          -
        </button>
        <p className="input">{count}</p>

        <button
          onClick={() => {
            console.log("test", count, items);

            setCount(count + 1);
          }}
          className="increase-btn"
        >
          +
        </button>
      </div>

      <div>
        <button
          className="add-cart"
          onClick={() => {
            setItems({
              ...items,
              count: count,
              show: true,
              addToCart: true,
            });
          }}
        >
          <img className="addcart" src={IconCart} alt="icon-cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default CartContainer;
