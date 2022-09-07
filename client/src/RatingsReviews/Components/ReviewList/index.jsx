import React, { useState } from 'react';
import IndividualReviewTile from '../IndividualReviewTile/index.jsx';
import { StyleList, ReviewListButton } from '../styles.jsx';
import ReviewModal from './ReviewModal.jsx';
import UseReviewModal from './UseReviewModal.jsx';
import styled from 'styled-components';

let num = 2;

function ReviewList ({ allReviews }) {
  var [currSort, setCurrSort] = useState('Relevant');

  var [someReviews, setSomeReviews] = useState(allReviews.slice(0, num));

  let helpSort = allReviews.slice().sort((a, b) => b.helpfulness - a.helpfulness);
  let newSort = allReviews.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  const {showReviewModal, toggleReviewModal} = UseReviewModal();

  // reset num
  var handleChange = (event) => {
    setCurrSort(event.target.value)
    if (event.target.value === 'Helpful') {
      num = 2
      setSomeReviews(helpSort.slice(0, num))
      // setSomeReviews(fivesArr.slice(0, num))
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
      <SearchDiv>
        <KeywordSearch type="text" placeholder="Search for Reviews"/>
        <SearchButton>Search</SearchButton>
      </SearchDiv>
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
          {
            num < allReviews.length ?
              <ReviewListButton onClick={increment}>More Reviews</ReviewListButton> :
              null
          }
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

const KeywordSearch = styled.input`
  border-radius: 15px;
  border-style: inset;
  height: 2em;
  width: 45em;
  `;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchButton = styled.button`
appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  // font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  height: 2em;
  // margin: 5px 15px 5px 15px;
  // min-height: 60px;
  min-width: 0;
  outline: none;
  // padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 10em;
  will-change: transform;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`
// const SearchButton = styled.button`
//   height: 2.25em;
//   width: 10em;
//   border-radius: 15px;
//   cursor: pointer;
// `