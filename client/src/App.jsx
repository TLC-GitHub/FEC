import React, { useState, useEffect } from 'react';
import RelatedProductsFetch from './RelatedItems/Components/RelatedProductsFetch.jsx';
import OverviewModule from './Overview/Components/OverviewModule.jsx'
import MyOutfit from './RelatedItems/Components/MyOutfit.jsx';
import RatingsAndReviews from './RatingsReviews/Components/index.jsx'
import QuestionList from './QnA/Components/QuestionList.jsx'

const axios = require('axios');

function App() {
  const [productID, setProduct] = useState(65637);
  const [curProduct, setCurProduct] = useState({ features: [], styles: [], related: [] });

  // let randomID = Math.floor(Math.random() * (65660 - 65631) + 65631); // to generate a random productID first 30 ID's
  // setProduct(randomID)
  // console.log('logging out the random product_id: ', randomID);
  useEffect(() => {
    let currentProduct = { id: productID }
    let requestBody = {
      widget: 'products',
      pathVariable: productID
    }
    axios.get('/get', {params: requestBody})
      .then((result) => {
        currentProduct.category = result.data.category;
        currentProduct.name = result.data.name;
        currentProduct.default_price = result.data.default_price;
        currentProduct.features = result.data.features;
      })
      .then(() => {
        let requestBodyForStyles = {
          widget: 'products',
          pathVariable: productID,
          subCategory: 'styles'
        }
        return axios.get('/get', {params: requestBodyForStyles})
          .then((styles) => {
            currentProduct.styles = styles.data.results;
          })
          .then(() => {
            let requestBodyForReviews = {
              widget: 'reviews/meta',
              queryParams: {
                product_id: productID
              }
            }
            return axios.get('/get', {params: requestBodyForReviews})
              .then((reviews) => {
                currentProduct.ratings = reviews.data.ratings;
              })
              .then(() => {
                setCurProduct(() => ({
                  id: currentProduct.id,
                  name: currentProduct.name,
                  category: currentProduct.category,
                  features: [...currentProduct.features],
                  styles: [...currentProduct.styles],
                  default_price: currentProduct.default_price,
                  ratings: currentProduct.ratings
                }));
              })
          })
      })
      .catch((err) => {
        console.log("Initial data fetch error: ");
        console.log(err);
      })
  }, []);

  return (
    <div>
      <div>
        <OverviewModule />
      </div>
      <div>
        <h3>YOU MAY ALSO LIKE</h3>
        <RelatedProductsFetch productID={productID} curProduct={curProduct}/>
      </div>
      <div>
        <h3>MY OUTFITS</h3>
        <MyOutfit />
      </div>
      <div>
        <h1>Questions and Answers</h1>
        <QuestionList />
      </div>
      <div>
        <div><h1>Ratings and Reviews</h1></div>
        <RatingsAndReviews />
      </div>
    </div>
  )
}

export default App;