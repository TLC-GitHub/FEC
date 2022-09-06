import React, { useState } from 'react';
import { Star } from '../../../../RatingsReviews/Components/styles.jsx'
import styled from 'styled-components';




function RatingBreakdown({ ratings, recommended, filterSort }) {
  var [fiveToggle, setFiveToggle] = useState(false)
  var [fourToggle, setFourToggle] = useState(false)
  var [threeToggle, setThreeToggle] = useState(false)
  var [twoToggle, setTwoToggle] = useState(false)
  var [oneToggle, setOneToggle] = useState(false)

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

  var handleColor = (value) => {
    filterSort(value)

    if (value === 5) {
      setFiveToggle(!fiveToggle)
    } else if (value === 4) {
      setFourToggle(!fourToggle)
    } else if (value === 3) {
      setThreeToggle(!threeToggle);
    } else if (value === 2) {
      setTwoToggle(!twoToggle);
    } else if (value === 1) {
      setOneToggle(!oneToggle);
    }
  }


  return(
    <div>
      {/* {console.log('RATING BREAK', filterSort)} */}
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
          <BarSpace onClick={() => handleColor(5)}>
            {!fiveToggle && <BarSpace>5 star</BarSpace>}
            {fiveToggle && <BarSpaceClicked>5 star</BarSpaceClicked>}
            {/* {console.log(fiveToggle)} */}
          </BarSpace>
          <BarRate>
            <FiveStar rating={fiveBar}></FiveStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace onClick={() => handleColor(4)}>
            {!fourToggle && <BarSpace>4 star</BarSpace>}
            {fourToggle && <BarSpaceClicked>4 star</BarSpaceClicked>}
          </BarSpace>
          <BarRate>
            <FourStar rating={fourBar}></FourStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace onClick={() => handleColor(3)}>
            {!threeToggle && <BarSpace>3 star</BarSpace>}
            {threeToggle && <BarSpaceClicked>3 star</BarSpaceClicked>}
          </BarSpace>
          <BarRate>
            <ThreeStar rating={threeBar}></ThreeStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace onClick={() => handleColor(2)}>
            {!twoToggle && <BarSpace>2 star</BarSpace>}
            {twoToggle && <BarSpaceClicked>2 star</BarSpaceClicked>}
          </BarSpace>
          <BarRate>
            <TwoStar rating={twoBar}></TwoStar>
          </BarRate>
        </StarRating>
        <StarRating>
          <BarSpace onClick={() => handleColor(1)}>
            {!oneToggle && <BarSpace>1 star</BarSpace>}
            {oneToggle && <BarSpaceClicked>1 star</BarSpaceClicked>}
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
  width: 70%;
  margin: 0.3em 0em 0em -.8em;
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
  margin-top: -.2em; // on monitor
  margin-left: -.2em; // on monitor
  // margin-top: -.09em; // on laptop
  // margin-left: -.09em; // on laptop
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
  margin-top: -.2em; // on monitor
  margin-left: -.2em; // on monitor
  // margin-top: -.09em; // on laptop
  // margin-left: -.09em; // on laptop
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
  margin-top: -.2em; // on monitor
  margin-left: -.2em; // on monitor
  // margin-top: -.09em; // on laptop
  // margin-left: -.09em; // on laptop
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
  margin-top: -.2em; // on monitor
  margin-left: -.2em; // on monitor
  // margin-top: -.09em; // on laptop
  // margin-left: -.09em; // on laptop
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
  margin-top: -.2em; // on monitor
  margin-left: -.2em; // on monitor
  // margin-top: -.09em; // on laptop
  // margin-left: -.09em; // on laptop
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

const BarSpaceClicked = styled.u`
  margin: 0em 0.8em 0em 0em;
  cursor: pointer;
  color: #330033;
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