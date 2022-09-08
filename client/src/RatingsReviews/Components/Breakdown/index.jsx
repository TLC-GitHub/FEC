import React from 'react';
import RatingBreakdown from './RatingBreakdown/index.jsx';
import ProductBreakdown from './ProductBreakdown/index.jsx';
import styled from 'styled-components';
import axios from 'axios';


function Breakdown ({ metaData, filterSort, metaSize, metaWidth, metaComfort, metaQuality, metaLength, metaFit }) {

  return (
    <Mains>
      <RatingBreakdown
        ratings={metaData.ratings}
        recommended={metaData.recommended}
        filterSort={filterSort}
      />
      <ProductBreakdown
        characteristics={metaData.characteristics}
        metaSize={metaSize}
        metaWidth={metaWidth}
        metaComfort={metaComfort}
        metaQuality={metaQuality}
        metaLength={metaLength}
        metaFit={metaFit}
      />
    </Mains>
  )
};

export default Breakdown;

var Mains = styled.div`
  display: flex;
  flex-direction: column;
  // margin: 1em 0em 0em 0em;
  width: 23em;
`;
