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
  const [curStyleID, setCurStyleID] = useState();
  const [curStyle, setCurStyle] = useState({});
  const [curStylePhoto, setCurStylePhoto] = useState([]);

  // let randomID = Math.floor(Math.random() * (65660 - 65631) + 65631); // to generate a random productID first 30 ID's
  // setProduct(randomID)
  // console.log('logging out the random product_id: ', randomID);
  useEffect(() => {
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
            currentProduct.image = styles.data.results[0].photo;
            currentProduct.original_price = styles.data.results[0].original_price;
            currentProduct.sale_price = styles.data.results[0].sale_price;
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
                  image: currentProduct.image,
                  // original_price: currentProduct.original_price,
                  // sale_price: currentProduct.sale_price,
                  default_price: currentProduct.default_price,
                  ratings: currentProduct.ratings,
                  selectedStyle: currentProduct.styles[0]
                }));
                setCurStyleID(currentProduct.styles[0].style_id);
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
    // console.log('i got clicked. New product ID is: ', value);
    setProductID(value);
  }

  const selectFromStyles = (value) => {
    console.log("what style is selected (app.js): ", value[0]);
    setCurProduct(() => (
      {...curProduct, "selectedStyle": value[0]}
    ));
  }

  return (
    <div>
      <div>
        <OverviewModule
          styles={curProduct.styles}
          selectFromStyles={selectFromStyles}
          productID={productID}
          curProduct={curProduct}
        />
      </div>
      <div>
        <h1>You May Also Like</h1>
        <RelatedProductsFetch
          productID={productID}
          curProduct={curProduct}
          selectFromRelated={selectFromRelated}
        />
      </div>
      <div>
        <h1>Your Outfit</h1>
        <OutfitSlider
          productID={productID}
          curProduct={curProduct}
        />
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