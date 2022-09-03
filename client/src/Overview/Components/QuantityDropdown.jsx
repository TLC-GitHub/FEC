import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import axios from 'axios';
// import Authorization from '../../../../config.js';
// const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';


const Display = styled.div `
display: inline-block
`;
const QuantityDropdown = (props) => {
  const [quantities, setQuantity] = useState('');
  const getQuantity = () => setQuantity(quantities);

  let availableQuantities = [];
  let currentQuantity;
  for(let i = 0; i < props.sizeNumbers.length; i++){
    if(props.sizeNumbers[i][1] === props.menuOption){
      currentQuantity = props.sizeNumbers[i][0];
      break;
    }
  }

  if(currentQuantity > 15){
    currentQuantity = 15;
  }

  for(let i = 0; i < currentQuantity; i++){
    availableQuantities.push(i + 1);
  }

  const quantityOptions = availableQuantities.map((quantity, i) => {
    return <option key={i} value={quantity}>{quantity}</option>
  })

  return (
  <Display>
      <div>
    <label>Choose a quantity:</label>

    <select name="quantities" id="quantity-select">
      <option value="">Please choose a quantity--</option>
      {quantityOptions}
    </select>
  </div>
  </Display>

  );
}

export default QuantityDropdown;