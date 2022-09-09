import React, {useState, useEffect} from 'react';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

const Category = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
`;

const ExpandedProductName = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const Price = styled.h4`
  font-weight: lighter;
  font-size: 1rem;
`;

const ProductInformation = ({ curProduct, originalPrice, salePrice }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/products?product_id=65651&sort=newest&count=200`, {
      headers: Authorization
    })
      .then((response) => {
        setCategory(response.data[0].category)
        setName(response.data[0].name)
        setPrice(response.data[0].default_price)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div>
    {/* <Category>{category}</Category> */}
    {/* <ExpandedProductName>{name}</ExpandedProductName> */}
    {/* <Price>${price}</Price> */}
    <Ratings ratings={curProduct.ratings}/>
    <Category>{curProduct.category}</Category>
    <ExpandedProductName>{curProduct.name}</ExpandedProductName>
    {
      salePrice !== 0 ?
      <Price>${originalPrice}</Price> :
      <Price>
        <span style={{color: "red"}}>${salePrice}</span>
        <span> <s>${originalPrice}</s></span>
      </Price>
    }
    </div>
  );
}

export default ProductInformation;

// {/* <div>
// {/* <Category>{category}</Category> */}
// {/* <ExpandedProductName>{name}</ExpandedProductName> */}
// {/* <Price>${price}</Price> */}
// <Category>{curProduct.category}</Category>
// <ExpandedProductName>{curProduct.name}</ExpandedProductName>
// {
//   salePrice !== 0 ?
//   <Price>${originalPrice}</Price> :
//   <Price>
//     <span style={{color: "red"}}>${salePrice}</span>
//     <span> <s>${originalPrice}</s></span>
//   </Price>
// }
// <Ratings ratings={curProduct.ratings}/>
// </div> */}