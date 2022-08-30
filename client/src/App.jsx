import React from 'react';
import RelatedProducts from './RelatedItems/Components/RelatedProducts.jsx';
import OverviewModule from './Overview/Components/OverviewModule.jsx'
import MyOutfit from './RelatedItems/Components/MyOutfit.jsx';
import QuestionList from './QnA/Components/QuestionList.jsx'

function App() {



  return (
    <div>
      <OverviewModule />
     <div><h1>Overview</h1></div>
     <div>
     </div>
     <div>
       <h3>Related Products</h3>
       <RelatedProducts />
     </div>
     <div>
      <h3>My Outfits</h3>
      <MyOutfit />
    </div>
     <div>
        <h1> Questions and Answers</h1>
        <QuestionList />
      </div>
     <div><h1>Reviews</h1></div>
    </div>
  )
}

export default App;