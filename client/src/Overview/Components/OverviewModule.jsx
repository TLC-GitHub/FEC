import React, {useState} from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Announcement from './Announcement.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';

const OverviewModule = () => {
  const [data, setData] = useState('');
  const getData = () => setData(data);

  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Announcement />
      </div>
      <div>
        <h1>Overview</h1>
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
        <StyleSelector />
      </div>

    </div>
  );
}

export default OverviewModule;