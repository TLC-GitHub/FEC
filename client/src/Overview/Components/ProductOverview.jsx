import React, {useState} from 'react';
import ProductParagraph from './ProductParagraph.jsx';

const ProductOverview = () => {
  const [description, setDescription] = useState('');
  const getDescription = () => setDescription(paragraph);

  return (
    <div>
      <ProductParagraph />
    </div>
  )

}

export default ProductOverview;