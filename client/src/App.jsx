import React, { useState, useEffect } from 'react';
import RelatedProductsFetch from './RelatedItems/Components/RelatedProducts/RelatedProductsFetch.jsx';
import OverviewModule from './Overview/Components/OverviewModule.jsx'
import OutfitSlider from './RelatedItems/Components/OutfitList/OutfitSlider.jsx';
import RatingsAndReviews from './RatingsReviews/Components/index.jsx'
import QuestionList from './QnA/Components/QuestionList.jsx'
import styled from 'styled-components';
import {logInteractions} from './Interactions.jsx';

const axios = require('axios');

function App() {
  const [productID, setProductID] = useState(65637);
  const [curProduct, setCurProduct] = useState({ features: [], styles: [], related: [] });
  const [outfitList, setOutfitList] = useState([]);
  const [curStyle, setCurStyle] = useState({});
  const [curImages, setCurImages] = useState([]);

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
                  id: Number(currentProduct.id),
                  name: currentProduct.name,
                  category: currentProduct.category,
                  features: [...currentProduct.features],
                  styles: [...currentProduct.styles],
                  image: currentProduct.image,
                  default_price: currentProduct.default_price,
                  ratings: currentProduct.ratings,
                  selectedStyle: currentProduct.styles[0]
                }));
                setCurStyle((curStyle) => (
                  {...curStyle, ...currentProduct.styles[0]}
                ));
                setCurImages((curImages) => (
                  [...currentProduct.styles[0].photos]
                ))
              })
          })
      })
      .catch((err) => {
        console.log("Initial data fetch error: ");
        console.log(err);
      })
  }, [productID]);

  useEffect(() => {
    const outfitList = JSON.parse(localStorage.getItem('outfitList'));
    if (outfitList) {
      setOutfitList(outfitList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("outfitList", JSON.stringify(outfitList));
  }, [outfitList]);

  useEffect(() => {
  }, [productID])

  const selectFromRelated = (value) => {
    // console.log('i got clicked. New product ID is: ', value);
    setProductID(value);
  }

  const selectFromStyles = (value) => {
    // console.log("what style is selected (app.js): ", value[0]);
    setCurProduct(() => (
      {...curProduct, "selectedStyle": value[0]}
    ));
    setCurStyle((curStyle) => ( { ...curStyle, ...value[0]} ));
    setCurImages((curImages) => ( [...value[0].photos] ));
  }

  const addOutfit = () => {
    let alreadyAdded = false;
    outfitList.map((outfit) => {
      if (Number(outfit.id) === Number(productID)) {
        alreadyAdded = true;
      }
    });
    if (!alreadyAdded) {
      setOutfitList((outfits) => (
        [curProduct, ...outfits]
      ));
    } else {
      alert("Item is already in your outfit list!")
    }
  }

  const removeOutfit = (value) => {
    setOutfitList((outfits) => {
      return outfits.filter((outfit) => {
        return outfit.id !== Number(value)
      })
    })
  }

  return (
    // <div style={{backgroundColor: "#F0F5F9"}}>
    <MainApp>
      <RelatedProductAndOutfits id="overview">
        <OverviewModule
          styles={curProduct.styles}
          selectFromStyles={selectFromStyles}
          curProduct={curProduct}
          images={curImages}
          originalPrice={curStyle.original_price}
          salePrice={curStyle.sale_price}
          productID={productID}
          addOutfit={addOutfit}
          removeOutfit={removeOutfit}
        />
      </RelatedProductAndOutfits>
      <RelatedProductAndOutfits>
        <ItemTitle>
          <h1>You May Also Like</h1>
        </ItemTitle>
        <Item>
            <RelatedProductsFetch
              productID={productID}
              curProduct={curProduct}
              selectFromRelated={selectFromRelated}
            />
        </Item>
      </RelatedProductAndOutfits>
      <RelatedProductAndOutfits>
        <ItemTitle>
          <h1>Your Outfit</h1>
        </ItemTitle>
        <Item>
          <OutfitSlider
            outfitList={outfitList}
            addOutfit={addOutfit}
            removeOutfit={removeOutfit}
            productID={productID}
            curProduct={curProduct}
          />
        </Item>
      </RelatedProductAndOutfits>
      <RelatedProductAndOutfits>
        <ItemTitle>
          <h1>Questions and Answers</h1>
        </ItemTitle>
        <Item>
          <QuestionList
            productID={productID}
            curProduct={curProduct}
            curStyle={curProduct.selectedStyle}
          />
        </Item>
      </RelatedProductAndOutfits>
      <RelatedProductAndOutfits>
        <ItemTitle>
          <h1>Ratings and Reviews</h1>
        </ItemTitle>
        <Item>
          <RatingsAndReviews
            productID={productID}
            curProduct={curProduct}
            curStyle={curStyle}
            selectFromRelated={selectFromRelated}
          />
        </Item>
      </RelatedProductAndOutfits>
    </MainApp>
  )
}

export default App;


export const RelatedProductAndOutfits = styled.div`
  margin: auto;
  width: 70%;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0em 0em 3em 0em;
`;

const ItemTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0em 0em 0em 0em;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  color: #1E2022;
  font-family: 'Trebuchet MS', sans-serif;
  width: 100em;
  `;
  // border-style: solid;
