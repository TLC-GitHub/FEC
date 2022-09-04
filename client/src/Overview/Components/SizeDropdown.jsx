import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

import styled from 'styled-components';

const Display = styled.div `
display: inline-block;
`;

const SizeDropdown = (props) => {
  const [sizes, setSizes] = useState('');
  const getSize = () => setSize(sizes);

  useEffect(() => {
    axios.get(`${API_URL}/products/65651/styles`, {
      headers: Authorization
    })
      .then((response) => {
        setSizes(response.data.results[0].skus)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  for(let sku in sizes){
    props.sizeNumbers.push([sizes[sku].quantity, sizes[sku].size, sku]);
  }


  const sizeOptions = props.sizeNumbers.map((size, i) => {
    return <option key={i} value={size[1]}>{size[1]}</option>
  });

  return (
  <Display>
      <div>
    <label>Choose a size:</label>

    <select onChange={props.changeMenuOption} name="sizes" id="size-select">
      <option value="">Please choose a size--</option>
      {sizeOptions}
    </select>
  </div>
  </Display>

  );
}

export default SizeDropdown;