import React, { useState }from 'react';
import { CardContainer, ImgContainer, ImageStyled, StyledStarBtn, Star, ImageOverlay, OverlayText } from "../Styles.jsx";
import NoPhotoImg from "../../images/imgComingSoon.png";
import ComparisonModal from "../Comparison/ComparisonModal.jsx";
import useModal from "../Comparison/useModal.jsx";
import ImageSlider from "./ImageSlider.jsx";

const ProductCard = ({ id, image, category, name, original_price, sale_price, ratings, features, styles, photos, curProduct, curStyle, selectFromRelated }) => {

  const [target, setTarget] = useState(0);
  const [displayImg, setDisplayImg] = useState(image);
  const {showModal, toggle} = useModal();

  const handleIconClick = (e) => {
    setTarget(e.target.value);
    toggle();
  }

  const handleProductClick = (e) => {
    console.log('what is being clicked: ', e.target)
    selectFromRelated(e.target.id);
  }

  const changeOfImage = (value) => {
    setDisplayImg((preValue) => {
      return value;
    });
  }

  return (
    <CardContainer>
      <ImgContainer>
        {image !== null ?
          <ImageStyled
            src={displayImg} alt="apiImg"
            id={id} onClick={handleProductClick}
          /> :
          <ImageStyled
            src={require("../../images/imgComingSoon.png")} alt="noImg"
            id={id} onClick={handleProductClick}
          />
        }
        <ImageOverlay>
          <ImageSlider
            photos={photos}
            changeOfImage={changeOfImage}
          >
          </ImageSlider>
        </ImageOverlay>

        <StyledStarBtn>
          <button type="button" value={id} onClick={handleIconClick}
            style={{border: "none", fontSize: "1.5rem", cursor: "pointer", backgroundColor: "rgba(0,0,0,0)", color: "#7F8487"}}
          >&#9734;
          </button>
          <ComparisonModal
            showModal={showModal}
            hide={toggle}
            targetID={target}
            targetCategory={category}
            targetName={name}
            targetOriginal_price={original_price}
            targetSale_price={sale_price}
            targetRatings={ratings}
            targetFeatures={features}
            targetStyles={styles}
            curProduct={curProduct}
            curStyle={curStyle}
          />
        </StyledStarBtn>
      </ImgContainer>
      <div style={{padding: "0 8px", marginTop: "8px"}}
        id={id} onClick={handleProductClick}
      >
          <div id={id} onClick={handleProductClick}>{category}</div>
          <div id={id}><strong id={id} onClick={handleProductClick}>{name}</strong></div>
            { sale_price === 0 ?
              <div id={id} onClick={handleProductClick}>
                <span id={id}>${original_price}</span>
              </div> :
              <div id={id} onClick={handleProductClick}>
                <span id={id} style={{color: "red"}}>${sale_price}</span>
                <span id={id}> <s id={id}>${original_price}</s></span>
              </div> }
          <div id={id} onClick={handleProductClick}><Star id={id} percentage={((ratings/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star></div>
      </div>
    </CardContainer>
  );
};

export default ProductCard;