import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList/index.jsx'
import IndividualReviewTile from './IndividualReviewTile/index.jsx';
import Breakdown from './Breakdown/index.jsx';
// import ProductBreakdown from './ProductBreakdown/index.jsx';
// import RatingBreakdown from './RatingBreakdown/index.jsx';
// import Sorting from './Sorting/index.jsx';
// import WriteNewReview from './WriteNewReview/index.jsx';
// import KeywordSearch from './KeywordSearch/index.jsx';
import Auth from '../../../../config.js'
import axios from 'axios';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';
import styled from 'styled-components';


//porduct sample: 65651
//product sample: 65647


function RatingsAndReviews () {
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


  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=65651&sort=relevant&count=200`, {
      headers: Auth
    })
      .then((reviews) => {

        // console.log('ELO', reviews.data.results)
        axios.get(`${API_URL}/reviews/meta?product_id=65651`, {
          headers: Auth
        })
          .then((meta) => {
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
  }, [])


  var filterSort = (value) => {

    if (tracker.includes(value)) {
      var indexTracker = tracker.indexOf(value)

      tracker.splice(indexTracker, 1);
      var filteredArr = allReviews.filter(element => tracker.includes(element.rating))

    } else {
      tracker.push(value)
      var filteredArr = allReviews.filter(element => tracker.includes(element.rating))

    }
      setRatingSort(filteredArr);
    }


  return (
    <div>
      {/* <h2>Ratings and Reviews</h2> */}
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
              {!tracker.length  &&  <ReviewList allReviews={allReviews}/>}
              {tracker.length > 0 &&  <ReviewList allReviews={ratingSort}/>}
            </ReviewStyle>
          </RatingsWithReviews> :
          <div>
            <img src='https://thumbs.gfycat.com/DismalRemarkableHochstettersfrog-max-1mb.gif' width="200"/>
            <h3>❌THERE IS AN ERROR❌</h3>
          </div>
        }
      </div>
      {/* {console.log('REVIEWS INDEX mEATTATA', metaReviews)} */}


      {/* <RatingBreakdown /> */}
      {/* <ProductBreakdown /> */}


      {/* <KeywordSearch /> */}


      {/* <IndividualReviewTile /> */}
      {/* <Sorting /> */}
      {/* <WriteNewReview /> */}
    </div>
  )
};

export default RatingsAndReviews;

const RatingsWithReviews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const RatingsStyle = styled.div`
  margin: 0em .25em 0em 3em
`;
const ReviewStyle = styled.div`
  margin: 0em 3em 0em .25em
`;

// toggleFive={toggleFive}
// toggleFour={toggleFour}
// toggleThree={toggleThree}
// toggleTwo={toggleTwo}
// toggleOne={toggleOne}

