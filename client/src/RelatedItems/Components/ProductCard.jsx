import React from 'react';
import "./RelatedProducts.css";
import NoPhotoImg from "../images/imgComingSoon.png";

const axios = require('axios');

const ProductCard = ({ image, category, name, original_price, sale_price }) => {

  return (
    <div className="product_card">
      {image !== null ?
        <img className="RPImage" src={image} alt="" /> :
        <img className="RPImage" src={require("../images/imgComingSoon.png")} alt="" />
      }
      <div className="card_text">
        <div>{category}</div>
        <div><strong>{name}</strong></div>
        {sale_price === null ?
          <span>${original_price}</span> :
          <div><span style={{color: "red"}}>${sale_price}</span> <span><s>${original_price}</s></span></div>
        }
        <div>star rating</div>
      </div>
    </div>
  );
};

export default ProductCard;