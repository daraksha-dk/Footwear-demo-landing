import React from "react";
import "./ProductDetail.scss";
import CartContainer from "./CartContainer";
import AddCart from "./AddCart";
const ProductDetail = ({ items, setItems }) => {
  return (
    <div className="product-detail">
      <h3 className="company-name">SNEAKER COMPANY</h3>
      <h3 className="product-name">Fall Limited Edition Sneakers</h3>
      <p className="product-info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="price-info">
          <h3 className="price-num">$125.00</h3>
          <h4 className="discount">50%</h4>
        </div>
        <h4 class="old-price">$250.00</h4>
      </div>
      <div className="detail-bottom">
        <CartContainer items={items} setItems={setItems} />
        <AddCart items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default ProductDetail;
