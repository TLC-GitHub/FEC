import React, { useState }from 'react';
import { CardContainer, ImgContainer, StyledStarBtn, Star } from "../Styles.jsx";
import NoPhotoImg from "../../images/imgComingSoon.png";
import ComparisonModal from "../Comparison/ComparisonModal.jsx";
import useModal from "./useModal.jsx";

const ProductCard = ({ id, image, category, name, original_price, sale_price, ratings, features, styles, curProduct, curStyle, selectFromRelated }) => {

  const [target, setTarget] = useState(0);
  const {showModal, toggle} = useModal();

  const handleIconClick = (e) => {
    console.log('compare icon was clicked: ', e.target.value)
    setTarget(e.target.value);
    toggle();
  }

  const handleProductClick = (e) => {
    console.log('what is being clicked: ', e.target)
    console.log('product card was clicked: ', e.target.id);
    selectFromRelated(e.target.id);
  }

  return (
    <CardContainer>
      <ImgContainer>
        {image !== null ?
          <img style={{width: "100%", height: "100%", objectFit: "cover"}}
            src={image} alt="apiImg"
            id={id} onClick={handleProductClick}
          /> :
          <img style={{width: "100%", height: "100%", objectFit: "cover"}}
            src={require("../../images/imgComingSoon.png")} alt="noImg"
            id={id} onClick={handleProductClick}
          />
        }
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
            { sale_price === null ?
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