import React, { useState, useEffect } from 'react';

const helper = require('../../../../server/hrapi.js');
const axios = require('axios');

function ProductCard() {


  let requestBody = {
    widget: "qa/questions",
    queryParams: {
      page: 1,
      count: 10,
      product_id: 65656
    }
  };


  axios.get('/get', {
    params: requestBody
  })
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      console.log("frontend: ", err);
    });

  return (

    <div>
      {/* <img>image</img> */}
      <div>category</div>
      <div>name</div>
      <div>price</div>
      <div>star rating</div>
    </div>

  )
}

export default ProductCard;