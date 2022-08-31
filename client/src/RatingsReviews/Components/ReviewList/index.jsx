import React, { useState } from 'react';
import IndividualReviewTile from '../IndividualReviewTile/index.jsx';

let num = 2;

function ReviewList ({allReviews}) {
  let [reviews, setReviews] = useState(allReviews)
  // var count = 0
  let [someReviews, setSomeReviews] = useState(allReviews.slice(0,num))

  var increment = () => {
    num +=2
    setSomeReviews(allReviews.slice(0,num));
  }

  //make more reviews disappear

  return (
    <div>
      {/* {console.log(allReviews)} */}
      {/* {console.log(someReviews.length)} */}
      {someReviews.map((el, i) =>
        <IndividualReviewTile
          body={el.body}
          date={el.date}
          helpfulness={el.helpfulness}
          photos={el.photos}
          rating={el.rating}
          recommend={el.recommend}
          response={el.response}
          reviewer_name={el.reviewer_name}
          key={el.review_id}
          review_id={el.review_id}
          summary={el.summary}
        />
        )}
        <button onClick={increment}>More Reviews</button>
    </div>
  )
}
// console.log('Test', ReviewList.someReviews)
export default ReviewList;