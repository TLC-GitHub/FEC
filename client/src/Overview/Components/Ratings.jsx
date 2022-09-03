import React, {useState, useEffect} from 'react';
import {Star} from '../../RatingsReviews/Components/styles.jsx';
import styled from 'styled-components';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

const Link = styled.span`
  text-decoration: underline;
`;


const Ratings = (props) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=65651&sort=newest&count=200`, {
      headers: Authorization
    })
      .then((response) => {
        console.log('do something')
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return(
  <div>
    <Star percentage={10}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star>
    <Link>Read Reviews</Link>
  </div>

  );
}

export default Ratings;