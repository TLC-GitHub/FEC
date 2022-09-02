// import React, { useState, useEffect } from 'react';
// import ComparisonModal from '../../RelatedItems/Components/ComparisonModal.jsx';

// const axios = require('axios');

// const InitialFetchData = ({productID}) => {
//   const [curProduct, setCurProduct] = useState({ features: [], styles: [], related: [] });

//   useEffect(() => {
//     let currentProduct = { id: productID }
//     let requestBody = {
//       widget: 'products',
//       pathVariable: productID
//     }
//     axios.get('/get', {params: requestBody})
//       .then((result) => {
//         currentProduct.category = result.data.category;
//         currentProduct.name = result.data.name;
//         currentProduct.default_price = result.data.default_price;
//         currentProduct.features = result.data.features;
//       })
//       .then(() => {
//         let requestBodyForStyles = {
//           widget: 'products',
//           pathVariable: productID,
//           subCategory: 'styles'
//         }
//         return axios.get('/get', {params: requestBodyForStyles})
//           .then((styles) => {
//             currentProduct.styles = styles.data.results;
//           })
//           .then(() => {
//             let requestBodyForReviews = {
//               widget: 'reviews/meta',
//               queryParams: {
//                 product_id: productID
//               }
//             }
//             return axios.get('/get', {params: requestBodyForReviews})
//               .then((reviews) => {
//                 currentProduct.ratings = reviews.data.ratings;
//               })
//               .then(() => {
//                 setCurProduct(() => ({
//                   id: currentProduct.id,
//                   name: currentProduct.name,
//                   category: currentProduct.category,
//                   features: [...currentProduct.features],
//                   styles: [...currentProduct.styles],
//                   default_price: currentProduct.default_price,
//                   ratings: currentProduct.ratings
//                 }));
//               })
//           })
//       })
//       .catch((err) => {
//         console.log("Initial data fetch error: ");
//         console.log(err);
//       })
//   }, []);

//   return (
//        <ComparisonModal curProduct={curProduct} />

//   )
// }

// export default InitialFetchData;