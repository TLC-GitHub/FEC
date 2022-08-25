import React from 'react';
import IndividualReviewTile from './IndividualReviewTile/index.jsx';
import ProductBreakdown from './ProductBreakdown/index.jsx';
import RatingBreakdown from './RatingBreakdown/index.jsx';
import Sorting from './Sorting/index.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import KeywordSearch from './KeywordSearch/index.jsx';
// import KeywordSearch from './KeywordSearch';



function RatingsAndReviews () {
  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <IndividualReviewTile />
      <ProductBreakdown />
      <RatingBreakdown />
      <Sorting />
      <WriteNewReview />
      <KeywordSearch />
    </div>
  )
}

export default RatingsAndReviews;