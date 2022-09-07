import React, { useState } from 'react';
import styled from 'styled-components';

// arrow: &#9660;

function ProductBreakdown() {
  return(
    <ProductBreakdownMain>
      <h2>Product Breakdown</h2>
      {/*===============================================*/}
      <EachChar>
        <div>Size</div>
        <BarDirection>
          <Testing><>&#9660;</></Testing>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>

        <FeedbackRow>
          <div>Too small</div>
          <div>Perfect</div>
          <div>Too large</div>
        </FeedbackRow>
      </EachChar>
      {/*===============================================*/}
      {/* <EachChar>
        <div>Width</div>
        <BarDirection>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Too narrow</div>
          <div>Perfect</div>
          <div>Too wide</div>
        </FeedbackRow>
      </EachChar> */}
      {/*===============================================*/}
      {/* <EachChar>
        <div>Comfort</div>
        <BarDirection>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Uncomfortable</div>
          <div></div>
          <div>Perfect</div>
        </FeedbackRow>
      </EachChar> */}
      {/*===============================================*/}
      {/* <EachChar>
        <div>Quality</div>
        <BarDirection>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Poor</div>
          <div></div>
          <div>Perfect</div>
        </FeedbackRow>
      </EachChar> */}
      {/*===============================================*/}
      {/* <EachChar>
        <div>Length</div>
        <BarDirection>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Runs short</div>
          <div>Perfect</div>
          <div>Runs long</div>
        </FeedbackRow>
      </EachChar> */}
      {/*===============================================*/}
      {/* <EachChar>
        <div>Fit</div>
        <BarDirection>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Too tight</div>
          <div>Perfect</div>
          <div>Runs long</div>
        </FeedbackRow>
      </EachChar> */}
    </ProductBreakdownMain>
  )
}

export default ProductBreakdown;

const Testing = styled.div`
  position: absolute;
  top: -.12em;
  left: 48% ;
  z-index: 20;
`

const BarDirection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  // margin-top: -.2em;
  z-index: 1;
  // padding-top: -2em;
`;

const BarBackMid = styled.div`
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #ddd;
  background-color: #ddd;
  border-radius: 15px;
  width: 33%;
  margin-left: 0.4em;
  margin-right: 0.4em;
`;

const BarBack = styled.div`
  position: relative;
  height: 7px;
  border-style: solid;
  border-color: #ddd;
  background-color: #ddd;
  border-radius: 15px;
  width: 33%;
`;
const ArrowPosition = styled.div`
  // position: relative;
  // height: 1px;

  // border-style: solid;
  // border-color: #1A1A1A;
  // background-color: #1A1A1A;
  // border-radius: 15px;
  // width: 50%;
  // margin: -5em 0em 0em -13em;
  // margin-left: -.5em
  // margin-bottom: -5em
  // margin: -2em

`;

const EachChar = styled.div`
  margin: 1em 0em 1em 0em;
`;

const ProductBreakdownMain = styled.div`
  width: 20em;
`;

const FeedbackRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;