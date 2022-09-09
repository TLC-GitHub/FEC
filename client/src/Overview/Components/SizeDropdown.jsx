import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

import styled from 'styled-components';

const Display = styled.div `
display: inline-block;
`;

const SizeDropdown = (props) => {

  useEffect(() => {
    axios.get(`${API_URL}/products/65651/styles`, {
      headers: Authorization
    })
      .then((response) => {
        let sizes = [];
        for(let sku in response.data.results[0].skus){
          sizes.push([response.data.results[0].skus[sku].size, response.data.results[0].skus[sku].quantity, sku]);
        }
        props.setSizeNumbers(sizes);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  // for(let sku in sizes){
  //   props.sizeNumbers.push([sizes[sku].quantity, sizes[sku].size, sku]);
  // }
  // console.log('sizeNumbers', props.sizeNumbers)

  let sizeData =props.sizeNumbers.map((size, i) => {

   // console.log(size);
    return <option key={i} value={size}>{size[0]}</option>
  });
  // console.log(props.sizeNumbers);
  // //console.log('sizeData', sizeData[0].props.value);
  // console.log('sizes', sizeData)
  // console.log('menu option', props.menuOption[1], props.menuOption[2]);



  return (
  <Display>
      <div>

    <select className="size" onChange={(event) => setMenuOption(event.target.value.split(','))}
    name="sizes" id="size-select">
      <option value="">Select Size</option>
      {sizeData}
    </select>
  </div>
  </Display>

  );
}

export default SizeDropdown;