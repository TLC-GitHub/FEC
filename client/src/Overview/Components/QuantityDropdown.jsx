import React, {useState} from 'react';
import styled from 'styled-components';

const Display = styled.div `
display: inline-block
`;
const QuantityDropdown = () => {
  const [quantities, setQuantity] = useState('');
  const getQuantity = () => setQuantity(quantities);

  return (
  <Display>
      <div>
    <label>Choose a quantity:</label>

    <select name="quantities" id="quantity-select">
      <option value="">Please choose a quantity--</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
    </select>
  </div>
  </Display>

  );
}

export default QuantityDropdown;