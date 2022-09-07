import React, {useState, useEffect} from 'react';
import Logo from './Logo.jsx';
import Announcement from './Announcement.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import BookmarkButton from './BookmarkButton.jsx';
import './styles.css';


const OverviewModule = ({styles, selectFromStyles, productID, curProduct}) => {
  console.log("OverviewModule - what is the current product: ", styles);
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
        <AddToCart/>
      </div>
      <div>
        <BookmarkButton
          productID={productID}
          curProduct={curProduct}
        />
      </div>
      <div>
        <ProductInformation />
      </div>
      <div>
        <ProductOverview />
      </div>
      <div>
        <StyleSelector
          styles={styles}
          selectFromStyles={selectFromStyles}
        />
      </div>

    </div>
  </div>
  );
}

export default OverviewModule;