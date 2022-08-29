import React, {useState} from 'react';

import styled from 'styled-components';

const Display = styled.div `
display: inline-block
`;

const SizeDropdown = () => {
  const [sizes, setSize] = useState('');
  const getSize = () => setSize(sizes);

  return (
  <Display>
      <div>
    <label>Choose a size:</label>

    <select name="sizes" id="size-select">
      <option value="">Please choose a size--</option>
      <option value="xs">XS</option>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
      <option value="xxl">XXL</option>
    </select>
  </div>
  </Display>

  );
}

export default SizeDropdown;