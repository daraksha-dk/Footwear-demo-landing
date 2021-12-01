import React, { useState } from "react";
import Avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import CartItem from "./CartItem";

const MenuItem = ({ items, setItems }) => {
  const [showPanel, togglePanel] = useState(false);

  return (
    <>
      <div className="menu">
        <div className="menu-items">
          <h2 className="title">sneakers</h2>
          <p className="menuItem">Collection</p>
          <p className="menuItem">Men</p>
          <p className="menuItem">Women</p>
          <p className="menuItem">About</p>
          <p className="menuItem">Contact</p>
        </div>
        <div className="menu-imgs">
          <div>
            <button
              className="cart-btn"
              onClick={() => togglePanel(!showPanel)}
            >
              <img className="cart-icon" src={cart} alt="cart-icon" />
              <span className="cart-count">{items.count}</span>
            </button>
            {showPanel && <CartItem items={items} setItems={setItems} />}
          </div>
          <img className="avatar" src={Avatar} alt="avatar" />
        </div>
      </div>
      <hr className="menu-line" />
    </>
  );
};

export default MenuItem;
