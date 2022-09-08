import React, {useState} from 'react';
import styled from 'styled-components';

const BookmarkButton = ({ productID, addOutfit, removeOutfit }) => {
  // const [bookmarked, addBookmark] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleBookmarkClick = () => {
    if (!bookmark) {
      addOutfit();
      setBookmark(true);
    } else {
      removeOutfit(productID);
      setBookmark(false);
    }
  }

  // const star = bookmarked ?
  //   <button className="bookmark"
  //     // onClick={() => addBookmark(!bookmarked)}
  //     onClick={handleBookmarkClick}
  //   ><span>&#9733;</span></button> :
  //   <button className="bookmark"
  //     // onClick={() => addBookmark(!bookmarked)}
  //     onClick={handleBookmarkClick}
  //   ><span>&#9734;</span></button>

  return (
    <div>
      {/* {star} */}
        <button className="bookmark" onClick={handleBookmarkClick}>
          {
            bookmark ?
            <span>&#9733;</span> :
            <span>&#9734;</span>
          }
        </ button>
    </div>
  );
}


export default BookmarkButton;