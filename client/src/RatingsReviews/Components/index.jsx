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

  var [toggleFive, setToggleFive] = useState(false);
  var [toggleFour, setToggleFour] = useState(false);
  var [toggleThree, setToggleThree] = useState(false);
  var [toggleTwo, setToggleTwo] = useState(false);
  var [toggleOne, setToggleOne] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=65651&sort=relevant&count=200`, {
      headers: Auth
    })
      .then((response) => {
        setAllReviews(response.data.results)
      })
      .catch((err) => {
        console.log('RATING AND REVIEWS', err)
      })
      axios.get(`${API_URL}/reviews/meta?product_id=65651`, {
        headers: Auth
      })
        .then((response) => {
          setMetaData(response.data)
        })

    // Add product ID into second param so that it changes each time you change product ID
  }, [])



  var filterSort = () => {
    //AYO LOL
  }

  return (
    <div>
      {/* <h2>Ratings and Reviews</h2> */}
      <div>
        {allReviews && metaData ?
          <RatingsWithReviews>
            <RatingsStyle>
              <Breakdown metaData={metaData} filterSort={filterSort}/>
            </RatingsStyle>
            <ReviewStyle>
              <ReviewList allReviews={allReviews} />
            </ReviewStyle>
          </RatingsWithReviews> :
          <div>
            <img src='https://thumbs.gfycat.com/DismalRemarkableHochstettersfrog-max-1mb.gif' width="200"/>
            <h3>THERE IS AN ERROR</h3>
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