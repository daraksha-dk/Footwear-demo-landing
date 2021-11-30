import React from "react";
import "./CartContainer.scss";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true,
    };
  }
  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  DecrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  ToggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="cart-container">
        <button onClick={this.DecrementCount} className="decrease-btn">
          -
        </button>
        <p className="input">{this.state.count}</p>
        <button onClick={this.IncrementCount} className="increase-btn">
          +
        </button>
      </div>
    );
  }
}
export default CartContainer;
