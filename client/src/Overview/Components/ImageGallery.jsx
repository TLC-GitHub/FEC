import React, {useState} from 'react';
import HorizontalCarousel from './HorizontalCarousel.jsx';
import VerticalCarousel from './VerticalCarousel.jsx';

const ImageGallery = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return(
  <div>
    <div>
      <HorizontalCarousel />
    </div>
    <div>
      <VerticalCarousel />
    </div>
  </div>

  );

}

export default ImageGallery;

