import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyledCell, Star } from '../Styles.jsx';

const ComparisonTable = ({ curProduct, curStyle, targetID, targetCategory, targetName, targetOriginal_price, targetSale_price, targetRatings, targetFeatures, targetStyles }) => {

  const [oriPrice, setOriPrice] = useState(Number(curProduct.selectedStyle.original_price));
  const [salePrice, setSalePrice] = useState(Number(curProduct.selectedStyle.sale_price));
  const [curStyles, curFeatures, curValues] = [[], [], []];
  const [comStyles, comFeatures, comValues] = [[], [], []];

  useEffect(() => {

    setOriPrice(()=> (Number(curProduct.selectedStyle.original_price)));
    setSalePrice(()=> (Number(curProduct.selectedStyle.sale_price)));

  }, [curProduct]);

  const helper = (array, targetVal, resArray) => {
    return array.map((value) => {
      return resArray.push(value[targetVal]);
    });
  }
  helper(curProduct.styles, 'name', curStyles);
  helper(curProduct.features, 'feature', curFeatures);
  helper(curProduct.features, 'value', curValues);
  helper(targetStyles, 'name', comStyles);
  helper(targetFeatures, 'feature', comFeatures);
  helper(targetFeatures, 'value', comValues);

  const duplicateIndex = [];
  const remainingIndex = [];

  return (
    <tbody>
      <tr>
          <StyledCell><Star percentage={((curProduct.ratings/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star></StyledCell>
          <StyledCell><strong>Reviews</strong></StyledCell>
          <StyledCell><Star percentage={((targetRatings/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star></StyledCell>
        </tr>

        <tr>
          <StyledCell>
            {
              salePrice === 0 ?
              <span>${oriPrice}</span> :
              <div>
                <span style={{color: "red"}}>${salePrice} </span>
                <span><s>${oriPrice}</s></span>
              </div>

            }
          </StyledCell>
          <StyledCell><strong>Price</strong></StyledCell>
          <StyledCell>
            {
              targetSale_price === 0 ?
              <span>${targetOriginal_price}</span> :
              <div>
                <span style={{color: "red"}}>${targetSale_price} </span>
                <span><s>${targetOriginal_price}</s></span>
              </div>
            }
          </StyledCell>
        </tr>

        <tr>
          <StyledCell>{curProduct.category}</StyledCell>
          <StyledCell><strong>Category</strong></StyledCell>
          <StyledCell>{targetCategory}</StyledCell>
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
        { comFeatures.map((feature, index) => {
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
  )
}

export default ComparisonTable;