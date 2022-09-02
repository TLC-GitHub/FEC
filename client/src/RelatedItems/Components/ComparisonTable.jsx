import React from 'react';
import { Table, StyledHead, StyledCell } from './Styles.jsx';

const ComparisonTable = ({curProduct, comProduct}) => {
  console.log('in comparison table: ', curProduct);
  const [curStyles, curFeatures, curValues] = [[], [], []];
  const [comStyles, comFeatures, comValues] = [[], [], []];

  const helper = (array, targetVal, resArray) => {
    return array.map((value) => {
      return resArray.push(value[targetVal]);
    });
  }
  helper(curProduct.styles, 'name', curStyles);
  helper(curProduct.features, 'feature', curFeatures);
  helper(curProduct.features, 'value', curValues);

  helper(comProduct.styles, 'name', comStyles);
  helper(comProduct.features, 'feature', comFeatures);
  helper(comProduct.features, 'value', comValues);

  // sample data... to be deleted
  // const comFeatures = ['Material', 'Mid-Sole', 'Stitching'];
  // const comValues = ['FullControlSkin', 'ControlSupport Arch Bridge', 'Single Stitch'];
  const duplicateIndex = [];
  const remainingIndex = [];

  return (
    <Table>
      <thead style={{backgroundColor: '#C9D6DF'}}>
        <tr><th colSpan='3'>Comparing</th></tr>
      </thead>
      <thead>
        <tr>
          <StyledHead>{curProduct.name}</StyledHead>
          <StyledHead></StyledHead>
          <StyledHead>{comProduct.name}</StyledHead>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StyledCell>placeholder</StyledCell>
          <StyledCell><strong>Reviews</strong></StyledCell>
          <StyledCell>placeholder</StyledCell>
        </tr>

        <tr>
          <StyledCell>
            { curProduct.sale_price === null ?
              <span>${curProduct.original_price}</span> :
              <div><span style={{color: "red"}}>${curProduct.sale_price}</span> <span><s>${curProduct.original_price}</s></span></div>
            }
          </StyledCell>
          <StyledCell><strong>Price</strong></StyledCell>
          <StyledCell>
            { comProduct.sale_price === null ?
              <span>${comProduct.original_price}</span> :
              <div><span style={{color: "red"}}>${comProduct.sale_price}</span> <span><s>${comProduct.original_price}</s></span></div>
            }
          </StyledCell>
        </tr>
        <tr>
          <StyledCell>{curProduct.category}</StyledCell>
          <StyledCell><strong>Category</strong></StyledCell>
          <StyledCell>{comProduct.category}</StyledCell>
        </tr>
        <tr>
          <StyledCell>
            { curStyles.map((style) => (
              <div key={style}>{style} </div>
              ))
            }
          </StyledCell>
          <StyledCell><strong>Styles</strong></StyledCell>
          <StyledCell>
            { comStyles.map((style) => (
              <div key={style}>{style} </div>
              ))
            }
          </StyledCell>
        </tr>
        <tr>
          <StyledCell></StyledCell>
          <StyledCell><strong>Features</strong></StyledCell>
          <StyledCell></StyledCell>
        </tr>
        { curFeatures.map((feature, index) => {
            let targetIndex = comFeatures.indexOf(feature);
            if (targetIndex !== -1) {
              duplicateIndex.push(targetIndex);

              return (
                <tr key={feature}>
                  <StyledCell>{curValues[index]}</StyledCell>
                  <StyledCell>{feature}</StyledCell>
                  <StyledCell>{comValues[targetIndex]}</StyledCell>
                </tr>
              )
            } else {
              return (
                <tr key={feature}>
                  <StyledCell>{curValues[index]}</StyledCell>
                  <StyledCell>{feature}</StyledCell>
                  <StyledCell></StyledCell>
                </tr>
              )
            }
          })
        }
        {
          comFeatures.map((feature, index) => {
            if (duplicateIndex.indexOf(index) === -1) {
              return (
                <tr key={feature}>
                  <StyledCell></StyledCell>
                  <StyledCell>{feature}</StyledCell>
                  <StyledCell>{comValues[index]}</StyledCell>
                </tr>
              )
            }
          })
        }

      </tbody>
    </Table>
  )
}

export default ComparisonTable;