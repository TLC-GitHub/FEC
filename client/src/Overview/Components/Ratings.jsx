import React, {useState} from 'react';
import {Star} from '../../RatingsReviews/Components/styles.jsx';
import styled from 'styled-components';

const Link = styled.span`
  text-decoration: underline;
`;

const Ratings = (props) => {
  return(
  <div>
    <Star percentage={10}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star>
    <Link>Read Reviews</Link>
  </div>

  );
}

export default Ratings;