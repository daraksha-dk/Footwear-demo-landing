import React from "react";
import Avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import CartItem from "./CartItem";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  ToggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
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
              <button className="cart-btn" onClick={() => this.ToggleShow()}>
                <img className="cart-icon" src={cart} alt="cart-icon" />
                <span className="cart-count">{this.props.cartCount}</span>
              </button>
              {this.state.show && <CartItem />}
            </div>
            <img className="avatar" src={Avatar} alt="avatar" />
          </div>
        </div>
        <hr className="menu-line" />
      </>
    );
  }
}
export default MenuItem;
