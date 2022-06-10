import React from "react";
import speaker from "../assets/home/desktop/image-speaker-zx9.png";
import earphone from "../assets/home/desktop/image-earphones-yx1.jpg";

const ProductCard = () => {
  return (
    <div className="product__card container-wrap">
      <div className="product__card1 prod__card">
        <div className="product__image">
          <img src={speaker} alt="speaker" />
        </div>
        <div className="product__card-content">
          <div>
            <h1 className="letter-spacing">ZX9 SPEAKER</h1>
            <p className="letter-spacing">
              <span>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </span>
            </p>
          </div>
          <div>
            <button className="btn-primary btn letter-spacing uppercase">
              <span>see product</span>
            </button>
          </div>
        </div>
      </div>
      <div className="product__card2 prod__card  ">
        <div className="products__card__inner">
          <h1>ZX7 SPEAKER</h1>

          <button className="btn-secondary btn letter-spacing uppercase">
            <span>see product</span>
          </button>
        </div>
      </div>

      <div className="product__card3 prod__card">
        <div className="products__card__inner3">
          <div className="product3__image">
            <img src={earphone} alt="earphone" />
          </div>
          <div className="product3__content">
            <h1>YX1 EARPHONES</h1>
            <button className="btn-secondary btn letter-spacing uppercase">
            <span>see product</span>
          </button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
