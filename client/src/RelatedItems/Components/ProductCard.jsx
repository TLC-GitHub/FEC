import React, { useState, useEffect } from 'react';
import "./RelatedProducts.css";

const axios = require('axios');

const ProductCard = ({ image, category, name, original_price, sale_price }) => {

  return (
    <div className="product_card">
      <div>{category}</div>
      <div><strong>{name}</strong></div>
      {sale_price === null ?
        <span>${original_price}</span> :
        <div><span style={{color: "red"}}>${sale_price}</span> <span><s>${original_price}</s></span></div>
      }
    </div>
  );
};

export default ProductCard;