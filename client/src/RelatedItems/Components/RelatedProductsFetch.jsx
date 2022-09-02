import React, { useState, useEffect } from 'react';
import RelatedProdSlider from './RelatedProdSlider.jsx';
import ProductCard from './ProductCard.jsx';
import Auth from '../../../../config.js';
const axios = require('axios');
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp'

function RelatedProductsFetch({productID, curProduct}) {
  const [relatedProd, setRelatedProd] = useState([]);

  useEffect(() => {

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
        axios.get('/get', { params: requestBody })
        .then((result) => {
          productInfo.category = result.data.category;
          productInfo.name = result.data.name;
          productInfo.features = result.data.features;
        })
        .then(() => {
          let requestBodyForStyles = {
            widget: 'products',
            pathVariable: product,
            subCategory: 'styles'
          }
          return axios.get('/get', { params: requestBodyForStyles })
            .then((styles) => {
              productInfo.styles = styles.data.results;
              productInfo.original_price = styles.data.results[0].original_price;
              productInfo.sale_price = styles.data.results[0].sale_price;
              productInfo.image = styles.data.results[0].photos[0].thumbnail_url;
            })
            .then(() => {
              let requestBodyForReviews = {
                widget: 'reviews/meta',
                queryParams: { product_id: product }
              }
              return axios.get('/get', { params: requestBodyForReviews })
                .then((ratings) => {
                  let ratingsObj = ratings.data.ratings;
                  let numOfRatings = 0
                  let total = 0;
                  for (let key in ratings.data.ratings) {
                    total += Number(key) * Number(ratingsObj[key]);
                    numOfRatings += Number(ratingsObj[key]);
                  }
                  let average = total / numOfRatings;
                  productInfo.ratings = average;
                })
                .then(() => {
                  setRelatedProd((oldArray) => {
                    return [...oldArray, productInfo]
                  })
                })
            })
        })
      }
    })
    .catch((err) => {
      console.log("related products errors: ");
      console.log(err);
    });

    // make request directly to api
  //   axios.get(`${API_URL}/products/${productID}/related`, { headers: Auth })
  //     .then((products) => {
  //       for(let product of products.data) {
  //         let productInfo = { id: product };
  //         axios.get(`${API_URL}/products/${product}`, { headers: Auth })
  //           .then((result) => {
  //             productInfo.category = result.data.category;
  //             productInfo.name = result.data.name;
  //           })
  //           .then(() => {
  //             return axios.get(`${API_URL}/products/${product}/styles`, { headers: Auth })
  //               .then((styles) => {
  //                 productInfo.original_price = styles.data.results[0].original_price;
  //                 productInfo.sale_price = styles.data.results[0].sale_price;
  //                 productInfo.original_price = styles.data.results[0].original_price;
  //                 productInfo.image = styles.data.results[0].photos[0].thumbnail_url;
  //               })
  //               .then(() => {
  //                 return axios.get(`${API_URL}/reviews/meta?product_id=${product}`, { headers: Auth })
  //                   .then((ratings) => {
  //                     productInfo.ratings = ratings.data.ratings;
  //                   })
  //                   .then(() => {
  //                     setRelatedProd((oldArray) => {
  //                       return [...oldArray, productInfo]
  //                     })
  //                   })
  //               })
  //           })
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("related products fetch errors: ");
  //       console.log(err);
  //     })

  }, [])

  return (
    <RelatedProdSlider relatedProd={relatedProd} curProduct={curProduct}/>
  )
}

export default RelatedProductsFetch;