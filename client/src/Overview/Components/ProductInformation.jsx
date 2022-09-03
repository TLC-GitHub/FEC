import React, {useState} from 'react';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';

const Category = styled.h3`
  text-transform: uppercase;
`;

const ExpandedProductName = styled.h1`
  font-weight: bold;
`;

const Price = styled.h4`
  font-weight: lighter;
`;

const ProductInformation = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
    <div>
    <Category>Category</Category>
    <ExpandedProductName>Expanded Product Name</ExpandedProductName>
    <Price>$369</Price>
    <Ratings />
    </div>
  );
}

export default ProductInformation;