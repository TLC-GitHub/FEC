import React from 'react';
import RelatedProductsFetch from './RelatedItems/Components/RelatedProductsFetch.jsx';
import OverviewModule from './Overview/Components/OverviewModule.jsx'
import MyOutfit from './RelatedItems/Components/MyOutfit.jsx';
import RatingsAndReviews from './RatingsReviews/Components/index.jsx'
import QuestionList from './QnA/Components/QuestionList.jsx'

function App() {

  return (
    <div>
      <div>
        <OverviewModule />
      </div>
      <div>
        <h3>YOU MAY ALSO LIKE</h3>
        <RelatedProductsFetch />
      </div>
      <div>
        <h3>MY OUTFITS</h3>
        <MyOutfit />
      </div>
      <div>
        <h1>Questions and Answers</h1>
        <QuestionList />
      </div>
      <div>
        <div><h1>Ratings and Reviews</h1></div>
        <RatingsAndReviews />
      </div>
    </div>
  )
}

export default App;