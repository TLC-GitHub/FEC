import React, { useState } from 'react';
import IndividualReviewTile from '../IndividualReviewTile/index.jsx';
import { StyleList, ReviewListButton } from '../styles.jsx';
import ReviewModal from './ReviewModal.jsx';
import UseReviewModal from './UseReviewModal.jsx';

let num = 2;

function ReviewList ({allReviews}) {
  let [currSort, setCurrSort] = useState('Relevant');
  let [someReviews, setSomeReviews] = useState(allReviews.slice(0, num));

  let helpSort = allReviews.slice().sort((a, b) => b.helpfulness - a.helpfulness);
  let newSort = allReviews.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  const {showReviewModal, toggleReviewModal} = UseReviewModal();

  // reset num
  var handleChange = (event) => {
    setCurrSort(event.target.value)
    if (event.target.value === 'Helpful') {
      num = 2
      setSomeReviews(helpSort.slice(0, num))
    } else if (event.target.value === 'Newest') {
      num = 2
      setSomeReviews(newSort.slice(0, num))
    } else if (event.target.value === 'Relevant') {
      num = 2
      setSomeReviews(allReviews.slice(0, num))
    }
  };

  var handleSubmit = (e) => {
    e.preventDefault();
  };

  var increment = () => {
    num += 2

    if (currSort === 'Helpful') {
      setSomeReviews(helpSort.slice(0, num))
    } else if (currSort === 'Newest') {
      setSomeReviews(newSort.slice(0, num))
    } else if (currSort === 'Relevant') {
      setSomeReviews(allReviews.slice(0,num))
    }
  }

  return (
    <div>
      {console.log('ALL REVIEWWWSS', allReviews)}
      <h3>
        <form onSubmit={handleSubmit}>
          {allReviews.length} reviews, sorted by&nbsp;
          <select value={currSort} onChange={handleChange}>
            <option value={'Relevant'}>Relevant</option>
            <option value={'Newest'}>Newest</option>
            <option value={'Helpful'}>Helpful</option>
          </select>
        </form>
      </h3>
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
        <>
          {num < allReviews.length ? <ReviewListButton onClick={increment}>More Reviews</ReviewListButton> : null}
        </>
        <>
          <ReviewListButton onClick={toggleReviewModal}>
            Add a Review &#65291;
          </ReviewListButton>
          <ReviewModal
            showReviewModal={showReviewModal}
            hide={toggleReviewModal}
          />
        </>
      </StyleList>
    </div>
  )
}
export default ReviewList;