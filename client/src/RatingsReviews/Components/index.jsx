import React, { useState, useEffect } from 'react';
import IndividualReviewTile from './IndividualReviewTile/index.jsx';
import ProductBreakdown from './ProductBreakdown/index.jsx';
import RatingBreakdown from './RatingBreakdown/index.jsx';
import Sorting from './Sorting/index.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import KeywordSearch from './KeywordSearch/index.jsx';

import { getInfo, postInfo, updateInfo } from '../../../../server/hrapi.js'
import axios from 'axios';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp'



function RatingsAndReviews () {
  // const [sample, sampleFunc] = useState('');


  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=40344&sort=newest&count=200`)
    //
  })

  return (
    <div>
      { console.log(getInfo) }
      <h2>Ratings and Reviews</h2>
      <IndividualReviewTile />
      <ProductBreakdown />
      <RatingBreakdown />
      <Sorting />
      <WriteNewReview />
      <KeywordSearch />
    </div>
  )
};

export default RatingsAndReviews;