import React, {useState} from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 1px;
  height 100px;
  background-color: black;
`;

const ProductParagraph = () => {
  const [paragraph, setParagraph] = useState('');
  const getParagraph = () => setParagraph(paragraph);

  return (
  <div>
    <p>
      <b>You've got to wear shades</b>
      <br />
      Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.
    </p>
    <Bar></Bar>
  </div>

  );
}
export default ProductParagraph;