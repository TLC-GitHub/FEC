import React, { useState }from 'react';
import { CardContainer, ImgContainer, StyledStarBtn, Star } from "./Styles.jsx";
import NoPhotoImg from "../images/imgComingSoon.png";
import ComparisonModal from "./ComparisonModal.jsx";
import useModal from "./useModal.jsx";

const ProductCard = ({ id, image, category, name, original_price, sale_price, ratings, productID, curProduct }) => {
  const [target, setTarget] = useState(0);
  const {showModal, toggle} = useModal();

  const handleClick = (e) => {
    setTarget(e.target.value);
    toggle();
  }

  return (
    <CardContainer>
      <ImgContainer>
        {image !== null ?
          <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={image} alt="apiImg" /> :
          <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={require("../images/imgComingSoon.png")} alt="noImg" />
        }
        <StyledStarBtn>
          <button type="button" value={id} onClick={handleClick}
            style={{border: "none", fontSize: "1.5rem", cursor: "pointer", backgroundColor: "rgba(0,0,0,0)", color: "#7F8487"}}
          >&#9734;
          </button>
          <ComparisonModal showModal={showModal} hide={toggle} targetID={target} productID={productID} curProduct={curProduct} />
        </StyledStarBtn>
      </ImgContainer>
      <div style={{padding: "0 8px", marginTop: "8px"}}>
        <div>{category}</div>
        <div><strong>{name}</strong></div>
          { sale_price === null ?
            <span>${original_price}</span> :
            <div><span style={{color: "red"}}>${sale_price}</span> <span><s>${original_price}</s></span></div> }
        <div><Star percentage={((ratings/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star></div>
      </div>
    </CardContainer>
  );
};

export default ProductCard;