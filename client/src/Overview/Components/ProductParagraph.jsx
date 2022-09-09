import React, {useState} from 'react';
import styled from 'styled-components';


const ProductParagraphDisplay = styled.div`
  display: flex;
`;

const Bar = styled.div`
  width: 1px;
  height 100px;
  background-color: black;
`;

const ProductParagraph = (props) => {
  const [paragraph, setParagraph] = useState('');
  const getParagraph = () => setParagraph(paragraph);

  return (
    <ProductParagraphDisplay>

  <div>
    <p>
      <b>{props.slogan}</b>
      <br />
      {props.paragraph}
    </p>
    {/* <Bar></Bar> */}
  </div>
    </ProductParagraphDisplay>

  );
}
export default ProductParagraph;