import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList/index.jsx'
import IndividualReviewTile from './IndividualReviewTile/index.jsx';
import Breakdown from './Breakdown/index.jsx';
// import KeywordSearch from './KeywordSearch/index.jsx';
import Auth from '../../../../config.js'
import axios from 'axios';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';
import styled from 'styled-components';
import {logInteractions} from '../.././Interactions.jsx';


//porduct sample: 65651
//product sample: 65647

//product sample: 65631


function RatingsAndReviews ({ productID, curProduct, curStyle, selectFromRelated }) {
  const [allReviews, setAllReviews] = useState();
  const [metaData, setMetaData] = useState();

  const [metaSize, setMetaSize] = useState('');
  const [metaWidth, setMetaWidth] = useState('');
  const [metaComfort, setMetaComfort] = useState('');
  const [metaQuality, setMetaQuality] = useState('');
  const [metaLength, setMetaLength] = useState('');
  const [metaFit, setMetaFit] = useState('');

  var [ratingSort, setRatingSort] = useState([]);
  var [sortedList, setSortedList] = useState([]);
  var [tracker, setTracker] = useState([]);

  // Need these console.logs
  // console.log('curProductcurProduct', curProduct.name)
  // console.log('curStylecurStyle', curStyle)
  // console.log('selectFromRelatedselectFromRelated', selectFromRelated)

  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=${productID}&sort=relevant&count=200`, {
      headers: Auth
    })
      .then((reviews) => {
        axios.get(`${API_URL}/reviews/meta?product_id=${productID}`, {
          headers: Auth
        })
          .then((meta) => {
            setMetaSize('')
            setMetaWidth('')
            setMetaComfort('')
            setMetaQuality('')
            setMetaLength('')
            setMetaFit('')
            setMetaData(meta.data)
            setAllReviews(reviews.data.results)
            if (meta.data.characteristics.Size) {
              setMetaSize(meta.data.characteristics.Size)
            }
            if (meta.data.characteristics.Width) {
              setMetaWidth(meta.data.characteristics.Width)
            }
            if (meta.data.characteristics.Comfort) {
              setMetaComfort(meta.data.characteristics.Comfort)
            }
            if (meta.data.characteristics.Quality) {
              setMetaQuality(meta.data.characteristics.Quality)
            }
            if (meta.data.characteristics.Length) {
              setMetaLength(meta.data.characteristics.Length)
            }
            if (meta.data.characteristics.Fit) {
              setMetaFit(meta.data.characteristics.Fit)
            }
          })
          .catch((err) => console.log('Error Meta', err))
      })
      .catch((err) => console.log('Error Reviews', err))

    // Add product ID into second param so that it changes each time you change product ID
  }, [productID]);


  var filterSort = (value) => {
    if (tracker.includes(value)) {
      var indexTracker = tracker.indexOf(value)
      tracker.splice(indexTracker, 1);
      var filteredArr = allReviews.filter(element => tracker.includes(element.rating))
      setRatingSort(filteredArr);
    } else {
      tracker.push(value)
      var filteredArr = allReviews.filter(element => tracker.includes(element.rating))
      setRatingSort(filteredArr);
    }
      // setRatingSort(filteredArr);
  };


  return (
    <div id="RatingsAndReviews">
      <div>
        {allReviews && metaData ?
          <RatingsWithReviews>
            <RatingsStyle>
              <Breakdown
                filterSort={filterSort}
                metaData={metaData}
                metaSize={metaSize}
                metaWidth={metaWidth}
                metaComfort={metaComfort}
                metaQuality={metaQuality}
                metaLength={metaLength}
                metaFit={metaFit}
              />
            </RatingsStyle>
            <ReviewStyle>
              {!tracker.length  &&
                <ReviewList
                  productName={curProduct.name}
                  productID={productID}
                  allReviews={allReviews}
                  metaSize={metaSize}
                  metaWidth={metaWidth}
                  metaComfort={metaComfort}
                  metaQuality={metaQuality}
                  metaLength={metaLength}
                  metaFit={metaFit}
                />}
              {tracker.length > 0 &&
                <ReviewList
                  productName={curProduct.name}
                  productID={productID}
                  allReviews={ratingSort}
                  metaSize={metaSize}
                  metaWidth={metaWidth}
                  metaComfort={metaComfort}
                  metaQuality={metaQuality}
                  metaLength={metaLength}
                  metaFit={metaFit}
                />}
            </ReviewStyle>
          </RatingsWithReviews> :
          <div>
            <img src='https://thumbs.gfycat.com/DismalRemarkableHochstettersfrog-max-1mb.gif' width="200"/>
            <h3>❌THERE IS AN ERROR❌</h3>
          </div>
        }
      </div>
      {/* <KeywordSearch /> */}
    </div>
  )
};

export default RatingsAndReviews;

const RatingsWithReviews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Trebuchet MS', sans-serif;
`;

const RatingsStyle = styled.div`
  margin: 0em .25em 0em 3em;
`;

const ReviewStyle = styled.div`
  margin: 0em 3em 0em .25em;
`;