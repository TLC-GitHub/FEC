import React, {useState} from 'react';

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
  </div>

  );
}
export default ProductParagraph;