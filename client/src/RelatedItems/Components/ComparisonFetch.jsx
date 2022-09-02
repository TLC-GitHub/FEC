import React, { useState, useEffect } from 'react';
import ComparisonTable from './ComparisonTable.jsx';
import Auth from '../../../../config.js';

const axios = require('axios');
// const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';

const ComparisonFetch = ({ curProduct, targetID, targetCategory, targetName, targetOriginal_price, targetSale_price, targetRatings }) => {
  const [targetFeatures, setTargetFeatures] = useState([]);
  const [targetStyles, setTargetStyles] = useState([]);

  useEffect(() => {
    let requestBody = {
      widget: 'products',
      pathVariable: targetID
    }
    axios.get('/get', {params: requestBody})
      .then((result) => {
        setTargetFeatures(result.data.features)
      })
      .catch((err) => {
        console.log("Comparison data fetch error (features): ", err);
      })

    let requestBodyForStyles = {
      widget: 'products',
      pathVariable: targetID,
      subCategory: 'styles'
    }
   axios.get('/get', {params: requestBodyForStyles})
    .then((styles) => {
      setTargetStyles(styles.data.results)
    })
    .catch((err) => {
      console.log("Comparison data fetch error (features): ", err);
    })

  }, [])

  return (
    <ComparisonTable
      curProduct={curProduct}
      targetCategory={targetCategory}
      targetName={targetName}
      targetOriginal_price={targetOriginal_price}
      targetSale_price={targetSale_price}
      targetRatings={targetRatings}
      targetFeatures={targetFeatures}
      targetStyles={targetStyles}
    />
  )
}

export default ComparisonFetch;