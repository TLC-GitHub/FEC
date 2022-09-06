import React, {useState} from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 1px;
  height 100px;
  background-color: black;
`;

const ProductParagraph = (props) => {
  const [paragraph, setParagraph] = useState('');
  const getParagraph = () => setParagraph(paragraph);

  return (
  <div>
    <p>
      <b>{props.slogan}</b>
      <br />
      {props.paragraph}
    </p>
    <Bar></Bar>
  </div>

  );
}
export default ProductParagraph;