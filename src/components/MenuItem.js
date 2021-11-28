import React from "react";
import Avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";

const MenuItem = () => {
  return (
    <div>
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
          <img className="cart" src={Cart} alt="icon-cart" />
          <img className="avatar" src={Avatar} alt="image-avatar" />
        </div>
      </div>
      <hr className="menu-line" />
    </div>
  );
};
export default MenuItem;
