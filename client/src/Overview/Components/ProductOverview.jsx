import React, {useState, useEffect} from 'react';
import ProductParagraph from './ProductParagraph.jsx';
import ProductBullets from './ProductBullets.jsx';
import styled from 'styled-components';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

const ProductOverview = ({productID}) => {
  const [description, setDescription] = useState('');
  const [slogan, setSlogan] = useState('');
  const [features, setFeatures] = useState([]);
  const getDescription = () => setDescription(paragraph);

  useEffect(() => {
    axios.get(`${API_URL}/products/${productID}`, {
      headers: Authorization
    })
      .then((response) => {
        setDescription(response.data.description);
        setSlogan(response.data.slogan);
        let features = response.data.features || [];
        setFeatures(features)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [productID]);
  return (
   <ProductDescriptionRow>
      <ProductParagraph slogan={slogan} paragraph={description} />
      <ProductBullets features={features} />
  </ProductDescriptionRow>
  )

}

export default ProductOverview;

const ProductDescriptionRow = styled.div`
  display:flex;
  flex-display:row;
  margin-top: 10px;
  margin-left: 2rem;
  `;
  // gap: 30px;

{/* <div>
<div>
  <ProductParagraph slogan={slogan} paragraph={description} />
</div>
<div>
  <ProductBullets features={features} />
</div>
</div> */}