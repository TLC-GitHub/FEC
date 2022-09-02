import React, { useState, useEffect } from 'react';
import RelatedProductsFetch from '../../RelatedItems/Components/RelatedProductsFetch.jsx';

const axios = require('axios');

const InitialFetchData = () => {
  const [curProduct, setCurProduct] = useState({ features: [], styles: [], related: [] });

  let randomID = Math.floor(Math.random() * (65660 - 65631) + 65631); // to generate a random productID first 30 ID's
  console.log('logging out the random product_id: ', randomID);

  useEffect(() => {
    async function fetchData(productID) {
      let currentProduct = { id: productID }

      let requestBody = {
        widget: 'products',
        pathVariable: productID
      }
      axios.get('/get', {params: requestBody})
        .then((result) => {
            currentProduct.category = result.data.category,
            currentProduct.name = result.data.name,
            currentProduct.default_price = result.data.default_price,
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
          let requestBody = {
            widget: 'products',
            pathVariable: productID,
            subCategory: 'related'
          }
          return axios.get('/get', {params: requestBody})
            .then((related) => {
              currentProduct.related = related.data
            });
        })
        .then(() => {
          setCurProduct(() => ({
            id: currentProduct.id,
            name: currentProduct.name,
            category: currentProduct.category,
            features: [...currentProduct.features],
            styles: [...currentProduct.styles],
            default_price: currentProduct.default_price,
            ratings: currentProduct.ratings,
            related: [...currentProduct.related]
          }))
        })
        .catch((err) => {
          console.log("Initial data fetch error: ");
          console.log(err);
        });
    }
    fetchData(randomID);
  }, [])

  return (
    // <>
    //   <RelatedProductsFetch curProduct={curProduct}/>
    // </>
    console.log(curProduct)
  )
}

export default InitialFetchData;