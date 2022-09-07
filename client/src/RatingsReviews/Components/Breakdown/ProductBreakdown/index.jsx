import React, { useState } from 'react';
import styled from 'styled-components';

// arrow: &#9660;

function ProductBreakdown({ characteristics, metaSize, metaWidth, metaComfort, metaQuality, metaLength, metaFit }) {

  var sizeAverage;
  var widthAverage;
  var comfortAverage;
  var qualityAverage;
  var lengthAverage;
  var fitAverage;

  //subtract by two, for css purposes
  if (metaSize) {
    sizeAverage = `${((Number(characteristics.Size.value)/5)*100)-2}%`;
  }
  if (metaWidth) {
    widthAverage = `${((Number(characteristics.Width.value)/5)*100)-2}%`;
  }
  if (metaComfort) {
    comfortAverage = `${((Number(characteristics.Comfort.value)/5)*100)-2}%`
  }
  if (metaQuality) {
    qualityAverage = `${((Number(characteristics.Quality.value)/5)*100)-2}%`
  }
  if (metaLength) {
    lengthAverage = `${((Number(characteristics.Length.value)/5)*100)-2}%`
  }
  if (metaFit) {
    fitAverage = `${((Number(characteristics.Fit.value)/5)*100)-2}%`;
  }


  return(
    <ProductBreakdownMain>

      <h2>Product Breakdown</h2>
      {/*===============================================*/}
      {metaSize ? <EachChar>
        <div>Size</div>
        <BarDirection>
          <SizeRating sizeAverage={sizeAverage}><>&#9660;</></SizeRating>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>

        <FeedbackRow>
          <div>Too small</div>
          <div>Perfect</div>
          <div>Too large</div>
        </FeedbackRow>
      </EachChar> : null}

      {/*===============================================*/}
      {metaWidth ? <EachChar>
        <div>Width</div>
        <BarDirection>
          <WidthRating widthAverage={widthAverage}><>&#9660;</></WidthRating>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>

        <FeedbackRow>
          <div>Too narrow</div>
          <div>Perfect</div>
          <div>Too wide</div>
        </FeedbackRow>
      </EachChar> : null}
      {/*===============================================*/}
      {metaComfort ? <EachChar>
        <div>Comfort</div>
        <BarDirection>
          <ComfortRating comfortAverage={comfortAverage}><>&#9660;</></ComfortRating>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Uncomfortable</div>
          <div></div>
          <div>Perfect</div>
        </FeedbackRow>
      </EachChar> : null}
      {/*===============================================*/}
      {metaQuality ? <EachChar>
        <div>Quality</div>
        <BarDirection>
          <QualityRating qualityAverage={qualityAverage}><>&#9660;</></QualityRating>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Poor</div>
          <div></div>
          <div>Perfect</div>
        </FeedbackRow>
      </EachChar> : null}
      {/*===============================================*/}
      {metaLength ? <EachChar>
        <div>Length</div>
        <BarDirection>
        <LengthRating lengthAverage={lengthAverage}><>&#9660;</></LengthRating>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Runs short</div>
          <div>Perfect</div>
          <div>Runs long</div>
        </FeedbackRow>
      </EachChar> : null}
      {/*===============================================*/}
      {metaFit ? <EachChar>
        <div>Fit</div>
        <BarDirection>
          <FitRating fitAverage={fitAverage}><>&#9660;</></FitRating>
          <BarBack></BarBack>
          <BarBackMid></BarBackMid>
          <BarBack></BarBack>
        </BarDirection>
        <FeedbackRow>
          <div>Too tight</div>
          <div>Perfect</div>
          <div>Runs long</div>
        </FeedbackRow>
      </EachChar> : null}
    </ProductBreakdownMain>
  )
}

export default ProductBreakdown;

const SizeRating = styled.div`
  position: absolute;
  top: -.12em;
  left: ${props => props.sizeAverage};
  z-index: 20;
`;

const WidthRating = styled.div`
  position: absolute;
  top: -.12em;
  left: ${props => props.widthAverage} ;
  z-index: 20;
`;

const ComfortRating = styled.div`
  position: absolute;
  top: -.12em;
  left: ${props => props.comfortAverage} ;
  z-index: 20;
`;

const QualityRating = styled.div`
  position: absolute;
  top: -.12em;
  left: ${props => props.qualityAverage} ;
  z-index: 20;
`;

const LengthRating = styled.div`
  position: absolute;
  top: -.12em;
  left: ${props => props.lengthAverage} ;
  z-index: 20;
`;

const FitRating = styled.div`
  position: absolute;
  top: -.12em;
  left: ${props => props.fitAverage} ;
  z-index: 20;
`;

const BarDirection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: .5em;
  margin-bottom: .5em;
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