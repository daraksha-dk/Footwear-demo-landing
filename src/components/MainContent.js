import React, { useState } from "react";
import "./MainContent.scss";
import FirstThumbnails from "../images/image-product-1.jpg";
import SecondThumbnails from "../images/image-product-2.jpg";
import ThirdThumbnails from "../images/image-product-3.jpg";
import FourthThumbnails from "../images/image-product-4.jpg";
import ProductDetail from "../components/ProductDetail";

const MainContent = () => {
  const [mainImg, setMainImg] = useState(FirstThumbnails);
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider-upperContainer">
          <img src={mainImg} alt="sneaker" className="upper-slider" />
        </div>
        <div className="slider-bottomContainer">
          <img
            src={FirstThumbnails}
            alt="firstthumbnail"
            className="bottom-slider"
            onClick={() => setMainImg(FirstThumbnails)}
          />
          <img
            src={SecondThumbnails}
            alt="secondthumbnail"
            className="bottom-slider"
            onClick={() => setMainImg(SecondThumbnails)}
          />
          <img
            src={ThirdThumbnails}
            alt="thirdthumbnail"
            className="bottom-slider"
            onClick={() => setMainImg(ThirdThumbnails)}
          />
          <img
            src={FourthThumbnails}
            alt="fourththumbnail"
            className="bottom-slider"
            onClick={() => setMainImg(FourthThumbnails)}
          />
        </div>
      </div>
      <ProductDetail />
    </div>
  );
};
export default MainContent;
