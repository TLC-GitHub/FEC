import React, { useState, useEffect } from 'react';

import Auth from '../../../../config.js';

const axios = require('axios');
// const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';

const ComparisonFetch = ({productID, targetID}) => {
  const [curProduct, setCurProduct] = useState({ features: [], styles: [] });
  const [comProduct, setComProduct] = useState({ features: [], styles: [] });

  useEffect(() => {

    async function fetchData() {
      let currentProduct = { id: productID }
      // info needed: name, category, default_price, sale_price, list of styles, available sizes, feature
      let requestBody = {
        widget: 'products',
        pathVariable: productID
      }
      axios.get('/get', {params: requestBody})
        .then((result) => {
            currentProduct.category = result.data.category,
            currentProduct.name = result.data.name,
            currentProduct.features = result.data.features                //array
        })
        .then(() => {
          let requestBody = {
            widget: 'products',
            pathVariable: productID,
            subCategory: 'styles'
          }
         return axios.get('/get', {params: requestBody})
          .then((styles) => {
            currentProduct.styles = styles.data.results            // array (sizes, colors, phhotos)
            currentProduct.original_price = styles.data.results[0].original_price;
            currentProduct.sale_price = styles.data.results[0].sale_price;
          });
        })
        .then(() => {
          let requestBody = {
            widget: 'reviews/meta',
            queryParams: {
              product_id: productID
            }
          }
          return axios.get('/get', {params: requestBody})
            .then((reviews) => {
              currentProduct.ratings = reviews.data.ratings;
            });
        })
        .then(() => {
          setCurProduct(() => ({
            id: currentProduct.id,
            name: currentProduct.name,
            category: currentProduct.category,
            features: [...currentProduct.features],
            styles: [...currentProduct.styles],
            original_price: currentProduct.original_price,
            sale_price: currentProduct.sale_price,
            ratings: currentProduct.ratings
          }))
        })
        .catch((err) => {
          console.log("comparison data fetch error: ");
          console.log(err);
        });
    }
    fetchData();
  }, [])

  return (
    <ComparisonTable curProduct={curProduct} comProduct={comProduct}/>
  )
}

export default ComparisonFetch;