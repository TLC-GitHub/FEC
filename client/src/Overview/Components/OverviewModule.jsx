import React, {useState} from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Announcement from './Announcement.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';

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
        <ProductOverview />
      </div>
    </div>
  );
}

export default OverviewModule;