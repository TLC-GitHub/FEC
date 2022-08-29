import React, { useState, useEffect } from 'react';

import "./RelatedProducts.css";
import ProductCard from './ProductCard.jsx';

const axios = require('axios');
// const helper = require('../server/hrapi.js');

function RelatedProducts() {
  let relatedProd = []
  // need to get the product_id of the current product =====> use product_id: 65633 for testing
  // make a get request to get the related product
  // (/products/:product_id/related) => result will be an array of numbers
  let requestBody = {
    widget: 'products',
    pathVariable: 65633,
    subCategory: 'related'
  }
  axios.get('/get', {params: requestBody})
    .then((result) => {
      console.log("related products: ", relatedProd)
      relatedProd = result;
    })
    .catch((err) => {
      console.log("related products errors: ");
      console.log(err);
    });

  // make a get request to get the product info for the related party
    // save the following info for product card: 'category', 'name', 'default_price'
    // and then make a get request to the style (/products/:product_id/styles)
      // get the first style form "results" array, save the following info for product card: 'original_price', 'sale_price'
      // get the star rating from review component


  return (
    <div className="related_prod">
      <ProductCard />
    </div>
  )
}

export default RelatedProducts;