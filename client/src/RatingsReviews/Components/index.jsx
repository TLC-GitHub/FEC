import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList/index.jsx'
import IndividualReviewTile from './IndividualReviewTile/index.jsx';
import ProductBreakdown from './ProductBreakdown/index.jsx';
import RatingBreakdown from './RatingBreakdown/index.jsx';
import Sorting from './Sorting/index.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import KeywordSearch from './KeywordSearch/index.jsx';
import Auth from '../../../../config.js'
import { getInfo, postInfo, updateInfo } from '../../../../server/hrapi.js'
import axios from 'axios';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp'


//porduct sample: 65651


function RatingsAndReviews () {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=65651&sort=newest&count=200`, {
      headers: Auth
    })
      .then((response) => {
        setReviews(response.data.results)
      })
      .catch((err) => {
        console.log(err)
      })


    // Add product ID into second param so that it changes each time you change product ID
  }, [])

  return (
    <div>
      {/* <h2>Ratings and Reviews</h2> */}
      <div>
        {reviews ? <ReviewList allReviews={reviews} /> : '🗿'}
      </div>


      {/* <IndividualReviewTile /> */}
      {/* <ProductBreakdown /> */}
      {/* <RatingBreakdown /> */}
      {/* <Sorting /> */}
      {/* <WriteNewReview /> */}
      {/* <KeywordSearch /> */}
    </div>
  )
};

export default RatingsAndReviews;