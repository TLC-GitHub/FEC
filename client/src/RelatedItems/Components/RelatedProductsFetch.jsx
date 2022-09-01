import React, { useState, useEffect } from 'react';
import RelatedProdSlider from './RelatedProdSlider.jsx';
import ProductCard from './ProductCard.jsx';

const axios = require('axios');

function RelatedProductsFetch({productID}) {
  const [relatedProd, setRelatedProd] = useState([]);

  // need to get the product_id of the current product =====> use product_id: 65633 for testing
  productID = 65637;

  useEffect(() => {
    async function fetchData() {
      let requestBody = {
        widget: 'products',
        pathVariable: productID,
        subCategory: 'related'
      }

      axios.get('/get', {params: requestBody})
      .then((products) => {
        for (let product of products.data) {
          let productInfo = { id: product };
          let requestBody = {
            widget: 'products',
            pathVariable: product
          }

          axios.get('/get', {params: requestBody})
          .then((result) => {
            productInfo.category = result.data.category;
            productInfo.name = result.data.name;
          });
          let requestBodyForStyles = {
            widget: 'products',
            pathVariable: product,
            subCategory: 'styles'
          }
          axios.get('/get', {params: requestBodyForStyles})
          .then((styles) => {
            productInfo.original_price = styles.data.results[0].original_price;
            productInfo.sale_price = styles.data.results[0].sale_price;
            productInfo.original_price = styles.data.results[0].original_price;
            productInfo.image = styles.data.results[0].photos[0].thumbnail_url;
          })
          .then(() => {
            setRelatedProd((oldArray) => {
              return [...oldArray, productInfo]
            })
          });
        }
      })
      .catch((err) => {
        console.log("related products errors: ");
        console.log(err);
      });
    }
    fetchData();
  }, [])
      // get the star rating from review component

  return (
    <RelatedProdSlider relatedProd={relatedProd} productID={productID}/>
  )
}

export default RelatedProductsFetch;