import React, {useState, useEffect} from 'react';
import Logo from './Logo.jsx';
import Announcement from './Announcement.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import './styles.css';



const OverviewModule = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
  <div>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz" />
    <div className="overview">
      <div className="logo">
        <Logo />
      </div>
      <div className="announcement">
        <Announcement />
      </div>
      <div>
        <ImageGallery />
      </div>
      <div>
        <AddToCart />
      </div>
      <div>
        <ProductInformation />
      </div>
      <div>
        <ProductOverview />
      </div>
      <div>
        <StyleSelector/>
      </div>

    </div>
  </div>
  );
}

export default OverviewModule;