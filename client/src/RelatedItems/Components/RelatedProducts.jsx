import React, { useState, useEffect } from 'react';
import "./RelatedProducts.css";
import ProductCard from './ProductCard.jsx';

const axios = require('axios');
// const helper = require('../server/hrapi.js');

function RelatedProducts() {
  const [relatedProd, setRelatedProd] = useState([]);
  console.log('beginning state: ', relatedProd);
  let relatedItems = []
  // need to get the product_id of the current product =====> use product_id: 65633 for testing
  // make a get request to get the related product
  // (/products/:product_id/related) => result will be an array of numbers
  let requestBody = {
    widget: 'products',
    pathVariable: 65637,
    subCategory: 'related'
  }
  axios.get('/get', {params: requestBody})
  .then((products) => {
    // console.log("related products: ", products.data)
    for (let product of products.data) {
      let productInfo = { id: product };
      let requestBody = {
        widget: 'products',
        pathVariable: product
      }
      // make a get request to get the product info for the related party
        axios.get('/get', {params: requestBody})
          .then((result) => {
            // save the following info for product card: 'category', 'name', 'default_price'
            productInfo.category = result.data.category;
            productInfo.name = result.data.name;
          });
        let requestBodyForStyles = {
          widget: 'products',
          pathVariable: product,
          subCategory: 'styles'
        }
        // and then make a get request to the style (/products/:product_id/styles)
        axios.get('/get', {params: requestBodyForStyles})
          .then((styles) => {
            // get the first style form "results" array, save the following info for product card: 'original_price', 'sale_price'
            productInfo.original_price = styles.data.results[0].original_price;
            productInfo.sale_price = styles.data.results[0].sale_price;
            productInfo.original_price = styles.data.results[0].original_price;
            productInfo.image = styles.data.results[0].photos[0].thumbnail_url;
          })
          .then(() => {
            // setRelatedProd((oldArray) => {
            //   return [...oldArray, productInfo]
            // })
            relatedItems.push(productInfo);
            console.log(relatedItems);
          });
      }
    })
    .catch((err) => {
      console.log("related products errors: ");
      console.log(err);
    });
      // get the star rating from review component

  return (
    <div className="related_prod">
      <ProductCard />
    </div>
  )
}

export default RelatedProducts;