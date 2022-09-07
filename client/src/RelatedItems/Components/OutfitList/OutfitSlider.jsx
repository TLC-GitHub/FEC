import React, { useState } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { StyledSlider, StyledInactiveItems, StyledArrow, InnerSlider, OutfitButton, AddOutfitBtn } from "../Styles.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function OutfitSlider({ productID, curProduct }) {

  // initial state for outfits will be deleted
  // const [outfits, setOutfits] = useState([
  //   {id: 1, category: 'shirt', name: 'a shirt', original_price: 29.99, sale_price: 19.99, ratings: 4.8, image: null},
  //   {id: 2, category: 'hat', name: 'good hat', original_price: 29.99, sale_price: 19.99, ratings: 3.8, image: null},
  //   {id: 3, category: 'shoes', name: 'a pair of nice shoes', original_price: 29.99, sale_price: 19.99, ratings: 2.8, image: null},
  //   {id: 4, category: 'funny', name: 'a funny looking shirt', original_price: 29.99, sale_price: 19.99, ratings: 4.2, image: null},
  //   {id: 5, category: 'clothing', name: 'nice looking shirt', original_price: 89.99, sale_price: 19.99, ratings: 4.2, image: null}
  // ]);
  const [outfits, setOutfits] = useState([]);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(3);
  const [leftArrow, setLeftArrow] = useState('none');
  const [rightArrow, setRightArrow] = useState('');
  const [length, setLength] = useState(5);

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

  const addOutfit = (e) => {
    let alreadyAdded = false;
    outfits.map((outfit) => {
      if (outfit.id === productID) { alreadyAdded = true; }
    });
    if (!alreadyAdded) {
      if (length + 1 > 4) { setRightArrow(''); }
      console.log("adding photos and style: ", curProduct);
      setOutfits((outfits) => (
        [curProduct, ...outfits]
      ));
      setLength(length + 1);
    } else {
      alert("Item is already in your outfit list!")
    }
  }

  const removeOutfit = (value) => {
    if (length - 1 <= 4) { setRightArrow('none'); }
    setOutfits((outfits) => {
      return outfits.filter((outfit) => {
        return outfit.id !== Number(value)
      })
    })
    setLength(length - 1);
  }

  return (
    <StyledSlider>
      <StyledArrow>
        <FaChevronLeft className="" onClick={prevSlide} style={{display: leftArrow}}/>
      </StyledArrow>

      <OutfitButton onClick={addOutfit}>
      &#10133; Add to Outfit
      </OutfitButton>

      <InnerSlider style={{"marginLeft": "14px"}}>
        {outfits.map(({ id, category, name, ratings, selectedStyle }, n) => {
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