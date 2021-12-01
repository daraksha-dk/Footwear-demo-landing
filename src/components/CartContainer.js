import React from "react";
import "./CartContainer.scss";

const CartContainer = ({ items, setItems }) => {
  return (
    <div className="cart-container">
      <button
        onClick={() => setItems({ count: items.count - 1, items: items.items })}
        className="decrease-btn"
      >
        -
      </button>
      <p className="input">{items.count}</p>

      <button
        onClick={() => setItems({ count: items.count + 1, items: items.items })}
        className="increase-btn"
      >
        +
      </button>
    </div>
  );
};

export default CartContainer;
