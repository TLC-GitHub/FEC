import React from 'react';
import { CardContainer, ImgContainer, StyledStar } from "./Styles.jsx";
import NoPhotoImg from "../images/imgComingSoon.png";
import { FaRegStar } from "react-icons/fa";

const axios = require('axios');

const ProductCard = ({ image, category, name, original_price, sale_price }) => {

  return (
    <CardContainer>
      <ImgContainer>
        {image !== null ?
          <img style={{width: "100%", height: "100%", "object-fit": "cover"}} src={image} alt="apiImg" /> :
          <img style={{width: "100%", height: "100%", "object-fit": "cover"}} src={require("../images/imgComingSoon.png")} alt="noImg" />
        }
        <StyledStar>
          <FaRegStar onClick={()=> {alert('i got clicked')}}/>
        </StyledStar>
      </ImgContainer>
      <div style={{padding: "0 8px", "margin-top": "8px"}}>
        <div>{category}</div>
        <div><strong>{name}</strong></div>
          { sale_price === null ?
            <span>${original_price}</span> :
            <div><span style={{color: "red"}}>${sale_price}</span> <span><s>${original_price}</s></span></div> }
        <div>star rating</div>
      </div>
    </CardContainer>
  );
};

export default ProductCard;