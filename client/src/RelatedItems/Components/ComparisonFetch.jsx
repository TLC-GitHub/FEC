import React, { useState, useEffect } from 'react';
import ComparisonTable from './ComparisonTable.jsx';
import Auth from '../../../../config.js';

const axios = require('axios');
// const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';

const ComparisonFetch = ({productID, targetID, curProduct}) => {
  console.log("In comparison fetch: ", curProduct);
  const [comProduct, setComProduct] = useState({ features: [], styles: [] });

  useEffect(() => {

    async function fetchData() {
      let comparedProduct = { id: targetID }
      // info needed: name, category, default_price, sale_price, list of styles, available sizes, feature
      let requestBody = {
        widget: 'products',
        pathVariable: targetID
      }
      axios.get('/get', {params: requestBody})
        .then((result) => {
            comparedProduct.category = result.data.category,
            comparedProduct.name = result.data.name,
            comparedProduct.features = result.data.features                //array
        })
        .then(() => {
          let requestBody = {
            widget: 'products',
            pathVariable: targetID,
            subCategory: 'styles'
          }
         return axios.get('/get', {params: requestBody})
          .then((styles) => {
            comparedProduct.styles = styles.data.results            // array (sizes, colors, phhotos)
            comparedProduct.original_price = styles.data.results[0].original_price;
            comparedProduct.sale_price = styles.data.results[0].sale_price;
          });
        })
        .then(() => {
          let requestBody = {
            widget: 'reviews/meta',
            queryParams: {
              product_id: targetID
            }
          }
          return axios.get('/get', {params: requestBody})
            .then((reviews) => {
              comparedProduct.ratings = reviews.data.ratings;
            });
        })
        .then(() => {
          setComProduct(() => ({
            id: comparedProduct.id,
            name: comparedProduct.name,
            category: comparedProduct.category,
            features: [...comparedProduct.features],
            styles: [...comparedProduct.styles],
            original_price: comparedProduct.original_price,
            sale_price: comparedProduct.sale_price,
            ratings: comparedProduct.ratings
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
    <ComparisonTable curProduct={curProduct} comProduct={comProduct} />
  )
}

export default ComparisonFetch;