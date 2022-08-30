import React, {useState} from 'react';
import HorizontalCarousel from './HorizontalCarousel.jsx';

const ImageGallery = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return(
    <div>
      <HorizontalCarousel />
    </div>
  );

}

export default ImageGallery;

