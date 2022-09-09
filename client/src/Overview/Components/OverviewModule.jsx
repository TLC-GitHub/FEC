import React, {useState, useEffect} from 'react';
import Logo from './Logo.jsx';
import Announcement from './Announcement.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import BookmarkButton from './BookmarkButton.jsx';
import styled from 'styled-components';
import './styles.css';


const OverviewModule = ({ productID, originalPrice, salePrice, curProduct, images, curStyle, styles, selectFromStyles, addOutfit, removeOutfit }) => {
  console.log("OverviewModule - what is the current product: ", curStyle);
  const [data, setData] = useState('');
  const getData = () => setData(data);

  const [expanded, expand] = useState(false);

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
      <OverviewContainer>
        <GalleryContainer>
          <ImageGallery
            images={images}
          />
        </GalleryContainer>
        {/* <ExpandButton id="expand-button" className="expand">&#9744;</ExpandButton> */}
        <InfoContainer>
          <ProductInformation
            curProduct={curProduct}
            originalPrice={originalPrice}
            salePrice={salePrice}
          />
          <StyleSelector
            styles={styles}
            selectFromStyles={selectFromStyles}
          />
        </InfoContainer>

        <InfoContainerCart>
          <AddToCart
            productID={productID}
            addOutfit={addOutfit}
            removeOutfit={removeOutfit}
          />
        </InfoContainerCart>
      </OverviewContainer>
      <ProductOverview
            productID={productID}
          />
    </div>
  </div>
  );
}

export default OverviewModule;

const OverviewContainer = styled.div`
  // display:flex;
`;
  //  gap: 20px;

const GalleryContainer = styled.div`
z-index: 1;
`;
// flex-grow: ${(event) => (expanded ? "1" : "2")};

const InfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  position: relative;
  // margin: 0;
  // top: -100px;
  // left: -100px;
`;
const InfoContainerCart = styled.div`
  display:flex;
  flex-direction:column;
  position: relative;
  // margin: 0;
  top: -100px;
  left: -450px;
`;

const ExpandButton = styled.button`
  border: none;
  font-size: 2rem;
  position: relative;
  bottom: 20rem;
  right: 24rem;
`;


{/* <div>
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
        <ImageGallery
          images={images}
        />
      </div>
      <div>
        <AddToCart/>
      </div>
      <div>
        <BookmarkButton
          productID={productID}
          addOutfit={addOutfit}
          removeOutfit={removeOutfit}
        />
      </div>
      <div>
        <ProductInformation
          curProduct={curProduct}
          originalPrice={originalPrice}
          salePrice={salePrice}
        />
      </div>
      <div>
        <ProductOverview
          productID={productID}
        />
      </div>
      <div>
        <StyleSelector
          styles={styles}
          selectFromStyles={selectFromStyles}
        />
      </div>

    </div>
  </div> */}