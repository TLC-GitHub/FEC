import React, {useState, useEffect} from 'react';
import ProductParagraph from './ProductParagraph.jsx';
import ProductBullets from './ProductBullets.jsx';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

const ProductOverview = ({productID}) => {
  const [description, setDescription] = useState('');
  const [slogan, setSlogan] = useState('');
  const [features, setFeatures] = useState([]);
  const getDescription = () => setDescription(paragraph);

  useEffect(() => {
    // axios.get(`${API_URL}/products?product_id=65651&sort=newest&count=200`, {
    axios.get(`${API_URL}/products/${productID}`, {
      headers: Authorization
    })
      .then((response) => {
        // let features = response.data[0].features || []
        // setDescription(response.data[0].description)
        // setSlogan(response.data[0].slogan)
        // setFeatures(features)

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
  <div>
    <div>
      <ProductParagraph slogan={slogan} paragraph={description} />
    </div>
    <div>
      <ProductBullets features={features} />
    </div>
  </div>
  )

}

export default ProductOverview;