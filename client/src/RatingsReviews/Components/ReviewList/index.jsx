import React, { useState } from 'react';
import IndividualReviewTile from '../IndividualReviewTile/index.jsx';
import { StyleList, ReviewListButton } from '../styles.jsx'

let num = 2;

function ReviewList ({allReviews}) {
  let [reviews, setReviews] = useState(allReviews)
  // var count = 0
  let [someReviews, setSomeReviews] = useState(allReviews.slice(0,num))
  let [currSort, setCurrSort] = useState('Relevance')


  var increment = () => {
    num +=2
    setSomeReviews(allReviews.slice(0,num));
  }
  var curr;
  // var sortHelp = () => {
  //   return copy;
  // }

  // var sortHelp = allReviews.slice()
  var sortHelp = allReviews.slice().sort((a, b) => b.helpfulness - a.helpfulness)


  var handleChange = (event) => {
    setCurrSort(event.target.value)
  }
  var handleSubmit = (e) => {
    e.preventDefault();
  }




  return (

    <div>
      {/* {console.log('REVIEWSSSSSS', reviews)} */}
      {/* {console.log('afterasdasd', sortHelp)} */}
      {/* {sortHelp.map((el, i) => console.log('SHEEESH', el.helpfulness))} */}
      <h3>
        <form onSubmit={handleSubmit}>
          {reviews.length} reviews, sorted by&nbsp;
          <select value={currSort} onChange={handleChange}>
            <option value={'Relevance'}>Relevance</option>
            <option value={'Helpful'}>Helpful</option>
            <option value={'Newest'}>Newest</option>
          </select>
        </form>
      </h3>
      {/* {console.log('afterasdasd', currSort)} */}
      <StyleList>
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
        {num < reviews.length ? <ReviewListButton onClick={increment}>More Reviews</ReviewListButton> : null}
        <ReviewListButton onClick={() => alert('please wait')}>Add a Review &#65291;</ReviewListButton>
      </StyleList>
    </div>
  )
}
export default ReviewList;