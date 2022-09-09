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
  // const [averageRating, setAverageRating] = useState(0);

  // useEffect(() => {
  //   axios.get(`${API_URL}/reviews/meta?product_id=65651&sort=newest&count=200`, {
  //     headers: Authorization
  //   })
  //     .then((response) => {
  //       console.log('ratings',response.data.ratings);
  //       console.log(response);
  //       let averageSum = 0;
  //       let numberOfRatings = 0;
  //       let ratingsList = response.data.ratings;
  //       for(let total in ratingsList ){
  //         numberOfRatings += Number(ratingsList[total]);
  //         averageSum += Number(total) * Number(ratingsList[total]);
  //       }
  //       let average = averageSum / numberOfRatings;
  //       setAverageRating(average);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, []);

      // let percent = (averageRating / 5) * 100;

      let percent = (props.ratings / 5) * 100;
      // console.log('percent', percent);
  return(
  <div>
    <Star percentage={percent + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star>
    <Link>Read Reviews</Link>
  </div>

  );
}

export default Ratings;