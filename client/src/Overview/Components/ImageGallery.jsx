import React, {useState} from 'react';
import HorizontalCarousel from './HorizontalCarousel.jsx';
import VerticalCarousel from './VerticalCarousel.jsx';

const ImageGallery = ({ images }) => {
  // const [data, setData] = useState('');
  // const getData = () => setData(data);

  return(
  <div>
    {/* <div> */}
      <HorizontalCarousel
        images={images}
      />
    {/* </div> */}
    {/* <div>
      <VerticalCarousel
        images={images}
      />
    </div> */}
  </div>

  );

}

export default ImageGallery;

