import React, { useState, useEffect } from 'react';
import { CardContainer, ImgContainer, StyledStarBtn, Star } from "../Styles.jsx";

const OutfitCard = ({ id, category, name, ratings, selectedStyle, removeOutfit }) => {

  return (
    <CardContainer>
      <ImgContainer>
        {
          selectedStyle.photos[0].thumbnail_url !== null ?
          <img style={{width: "100%", height: "100%", objectFit: "cover"}}
            src={selectedStyle.photos[0].thumbnail_url} alt="apiImg" /> :
          <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={require("../../images/imgComingSoon.png")} alt="noImg" />
        }
        <StyledStarBtn>
          <button
            type="button"
            value={id}
            onClick={event => removeOutfit(event.target.value)}
            style={{border: "none", fontSize: "1.5rem", cursor: "pointer", backgroundColor: "rgba(0,0,0,0)", color: "#7F8487"}}
          >&times;
          </button>
        </StyledStarBtn>
      </ImgContainer>
      <div style={{padding: "0 8px", marginTop: "8px"}}>
        <div>{category}</div>
        <div><strong>{name}</strong></div>
          {
            selectedStyle.sale_price === null ?
            <span>${selectedStyle.original_price}</span> :
            <div>
              <span style={{color: "red"}}>${selectedStyle.sale_price}</span>
              <span> <s>${selectedStyle.original_price}</s></span>
            </div>
          }
        <div><Star percentage={((ratings/5) * 100) + '%'}>&#9733;&#9733;&#9733;&#9733;&#9733;</Star></div>
      </div>
    </CardContainer>
  );
};

export default OutfitCard;