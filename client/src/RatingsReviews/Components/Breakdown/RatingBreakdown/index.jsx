import React, { useState } from 'react';
import { Star } from '../../../../RatingsReviews/Components/styles.jsx'
import styled from 'styled-components';




function RatingBreakdown({ ratings, recommended, filterSort }) {
  var recAverage = Math.round((Number(recommended.true) / (Number(recommended.true) + Number(recommended.false))) * 100);

  var totalRating = 0;
  var sumRating = 0;

  var totalEach = 0
  var totalFive = 0;
  var totalFour = 0;
  var totalThree = 0;
  var totalTwo = 0;
  var totalOne = 0;

  for (var key in ratings) {
    if (ratings[key]) {
      totalRating += (Number(ratings[key]) * 5)
      sumRating += (Number(key) * Number(ratings[key]))

      totalEach += Number(ratings[key])
      if (key === '5') {
        totalFive += Number(ratings[key])
      } else if (key === '4') {
        totalFour += Number(ratings[key])
      } else if (key === '3') {
        totalThree += Number(ratings[key])
      } else if (key === '2') {
        totalTwo += Number(ratings[key])
      } else if (key === '1') {
        totalOne += Number(ratings[key])
      }
    }
  }

  var starAve = Math.round((sumRating/totalRating) * 50)/10;
  var forStar = `${(starAve/5) * 100}%`;

  var fiveBar = `${Math.round((totalFive/totalEach)*100)}%`
  var fourBar = `${Math.round((totalFour/totalEach)*100)}%`
  var threeBar = `${Math.round((totalThree/totalEach)*100)}%`
  var twoBar = `${Math.round((totalTwo/totalEach)*100)}%`
  var oneBar = `${Math.round((totalOne/totalEach)*100)}%`



  return(
    <div>
      {console.log('RATING BREAK', filterSort)}
      <StarAverage>
        <Rating>
          {starAve}
        </Rating>
        <Star percentage={forStar}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star>
      </StarAverage>
      <h3>
        {recAverage}% of reviews recommend this product
      </h3>
      <div>
        <StarRating>
          <BarSpace>
            5 star
          </BarSpace>
          <BarRate>
            <FiveStar rating={fiveBar}></FiveStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace>
            4 star
          </BarSpace>
          <BarRate>
            <FourStar rating={fourBar}></FourStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace>
            3 star
          </BarSpace>
          <BarRate>
            <ThreeStar rating={threeBar}></ThreeStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace>
            2 star
          </BarSpace>
          <BarRate>
            <TwoStar rating={twoBar}></TwoStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace>
            1 star
          </BarSpace>
          <BarRate>
            <OneStar rating={oneBar}></OneStar>
          </BarRate>
        </StarRating>
      </div>
      {/* {console.log('ratings', ratings)} */}
    </div>
  )
}

export default RatingBreakdown;

const BarRate = styled.span`
  // display: inline-block;
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #ddd;
  background-color: #ddd;
  border-radius: 15px;
  width: 80%;
  margin: 0.3em 0em 0em 0em;
`;

const FiveStar = styled.div`
  // display: inline-block;
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #1A1A1A;
  background-color: #1A1A1A;
  border-radius: 15px;
  width: ${props => props.rating};
  margin-top: -.09em;
  margin-left: -.09em
`;

const FourStar = styled.div`
  // display: inline-block;
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #1A1A1A;
  background-color: #1A1A1A;
  border-radius: 15px;
  width: ${props => props.rating};
  margin-top: -.09em;
  margin-left: -.09em
`;

const ThreeStar = styled.div`
  // display: inline-block;
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #1A1A1A;
  background-color: #1A1A1A;
  border-radius: 15px;
  width: ${props => props.rating};
  margin-top: -.09em;
  margin-left: -.09em
`;

const TwoStar = styled.div`
  // display: inline-block;
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #1A1A1A;
  background-color: #1A1A1A;
  border-radius: 15px;
  width: ${props => props.rating};
  margin-top: -.09em;
  margin-left: -.09em
`;

const OneStar = styled.div`
  // display: inline-block;
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #1A1A1A;
  background-color: #1A1A1A;
  border-radius: 15px;
  width: ${props => props.rating};
  margin-top: -.09em;
  margin-left: -.09em
`;

const StarAverage = styled.div`
  display: flex;
  flex-direction: row;
`;

const BarSpace = styled.u`
  margin: 0em 0.8em 0em 0em;
  cursor: pointer;
  color: #FF0080;
`;

const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0em 1em 0em;
`;

const Rating = styled.b`
  font-size: 4em;
  margin: 0em 0.25em 0em 0em;
`;