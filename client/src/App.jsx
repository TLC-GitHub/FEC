import React from 'react';
import RelatedProducts from './RelatedItems/Components/RelatedProducts.jsx';
import MyOutfit from './RelatedItems/Components/MyOutfit.jsx';
import RatingsAndReviews from './RatingsReviews/Components/index.jsx'
function App() {



  return (
    <div>
      <div><h1>Overview</h1></div>
      <div>
        <h3>Related Products</h3>
        <RelatedProducts />
      </div>
      <div>
        <h3>My Outfits</h3>
        <MyOutfit />
      </div>
      <div><h1>Q&A</h1></div>
      <div><h1>Rating and Reviews</h1></div>
        <RatingsAndReviews />
    </div>
  )
}

export default App;