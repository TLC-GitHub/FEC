import React, {useState} from 'react';
import styled from 'styled-components';

const BookmarkButton = () => {
  const [bookmarked, addBookmark] = useState(false);

  const star = bookmarked ?  <button onClick={() => addBookmark(!bookmarked)}><span>&#9733;</span></button> : <button onClick={() => addBookmark(!bookmarked)}><span>&#9734;</span></button>

  return (
    <div>
      {star}
    </div>

  );
}


export default BookmarkButton;