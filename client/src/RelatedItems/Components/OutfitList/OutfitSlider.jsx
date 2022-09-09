import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { StyledSlider, StyledInactiveItems, StyledArrow, InnerSlider, OutfitButton, AddOutfitBtn } from "../Styles.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function OutfitSlider({ productID, curProduct, outfitList, addOutfit, removeOutfit }) {

  console.log("what is in my outfits in outfit slider: ", outfitList);

  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(3);
  const [leftArrow, setLeftArrow] = useState('none');
  const [rightArrow, setRightArrow] = useState('none');

  let length = outfitList.length;

  useEffect (() => {
    length = outfitList.length;
    setFirst(0);
    setLast(3);
    setLeftArrow('none');

    if(length > 4) {
      setRightArrow('');
    } else {
      setRightArrow('none');
    }
  }, [outfitList])

  const nextSlide = () => {
    if (last + 1 <= length - 1) {
      setFirst(first + 1)
      setLast(last + 1);
      setLeftArrow('');
    }
    if (last === length - 2) {
      setRightArrow('none');
    }
  };

  const prevSlide = () => {
    if (first - 1 >= 0) {
      setFirst(first - 1);
      setLast(last - 1);
      setRightArrow('');
    }
    if (first === 1) {
      setLeftArrow('none');
    }
  };

  return (
    <StyledSlider id="OutfitsList">
      <StyledArrow>
        <FaChevronLeft className="" onClick={prevSlide} style={{display: leftArrow}}/>
      </StyledArrow>

      <OutfitButton onClick={()=>addOutfit()}>
      &#10133; Add to Outfit
      </OutfitButton>

      <InnerSlider style={{"marginLeft": "14px"}}>
        {outfitList.map(({ id, category, name, ratings, selectedStyle }, n) => {
          if (n < first || n > last) {
            return (
              <StyledInactiveItems key={id}>
                <OutfitCard
                  id={id}
                  category={category}
                  name={name}
                  ratings={ratings}
                  selectedStyle={selectedStyle}
                  removeOutfit={removeOutfit}
                />
              </StyledInactiveItems>
            )
          } else {
            return (
              <OutfitCard
              key={id}
              id={id}
              category={category}
              name={name}
              ratings={ratings}
              selectedStyle={selectedStyle}
              removeOutfit={removeOutfit}
              />
            )
          }
        })}
      </InnerSlider>

      <StyledArrow>
        <FaChevronRight className="" onClick={nextSlide} style={{display: rightArrow}}/>
      </StyledArrow>
    </StyledSlider>
  )
}

export default OutfitSlider;