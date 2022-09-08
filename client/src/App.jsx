import React, { useState, useEffect } from 'react';
import RelatedProductsFetch from './RelatedItems/Components/RelatedProducts/RelatedProductsFetch.jsx';
import OverviewModule from './Overview/Components/OverviewModule.jsx'
import OutfitSlider from './RelatedItems/Components/OutfitList/OutfitSlider.jsx';
import RatingsAndReviews from './RatingsReviews/Components/index.jsx'
import QuestionList from './QnA/Components/QuestionList.jsx'

const axios = require('axios');

function App() {
  const [productID, setProductID] = useState(65637);
  const [curProduct, setCurProduct] = useState({ features: [], styles: [], related: [] });
  const [curStyle, setCurStyle] = useState({});
  const [curStylePhoto, setCurStylePhoto] = useState([]);

  // let randomID = Math.floor(Math.random() * (65660 - 65631) + 65631); // to generate a random productID first 30 ID's
  // setProduct(randomID)
  // console.log('logging out the random product_id: ', randomID);
  useEffect(() => {
    console.log("I should be here when something is clicked");
    let currentProduct = { id: productID };
    let style = {};
    let photos = [];
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
            style = styles.data.results[0];
            photos = style.photos;
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
                let ratingsObj = reviews.data.ratings;
                let numOfRatings = 0
                let total = 0;
                for (let key in reviews.data.ratings) {
                  total += Number(key) * Number(ratingsObj[key]);
                  numOfRatings += Number(ratingsObj[key]);
                }
                let average = total / numOfRatings;
                currentProduct.ratings = average;
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
                setCurStyle(style);
                setCurStylePhoto(photos);
              })
          })
      })
      .catch((err) => {
        console.log("Initial data fetch error: ");
        console.log(err);
      })
  }, [productID]);

  const selectFromRelated = (value) => {
    console.log('i got clicked. other product was selected: ', value);
    // setProductID(value);
    // setProductID(65635);
  }

  return (
    <div>
      <div>
        <OverviewModule />
      </div>
      <div>
        <h1>You May Also Like</h1>
        <RelatedProductsFetch
          productID={productID}
          curProduct={curProduct}
          curStyle={curStyle}
          selectFromRelated={selectFromRelated}
        />
      </div>
      <div>
        <h1>Your Outfit</h1>
        <OutfitSlider
          productID={productID}
          curProduct={curProduct}
          curStyle={curStyle}
          curStylePhoto={curStylePhoto}
        />
      </div>
      <div>
        <h1>Questions and Answers</h1>
        <QuestionList />
      </div>
      <div>
        <div><h1>Ratings and Reviews</h1></div>
        <RatingsAndReviews
          productID={productID}
          curProduct={curProduct}
          curStyle={curStyle}
          selectFromRelated={selectFromRelated}
        />
      </div>
    </div>
  )
}

export default App;