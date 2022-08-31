import React, {useState} from 'react';
import ProductParagraph from './ProductParagraph.jsx';
import ProductBullets from './ProductBullets.jsx';

const ProductOverview = () => {
  const [description, setDescription] = useState('');
  const getDescription = () => setDescription(paragraph);

  return (
  <div>
    <div>
      <ProductParagraph />
    </div>
    <div>
      <ProductBullets />
    </div>
  </div>
  )

}

export default ProductOverview;