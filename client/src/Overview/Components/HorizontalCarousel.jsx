import React, { useState, useEffect } from 'react';
import { HorizontalImage, HorizontalSlider } from './HorizontalScrollEntry.js';
import RightButton from './RightButton.jsx';
import LeftButton from './LeftButton.jsx';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';


const HorizontalCarousel = ({ images }) => {

  const [current, setCurrent] = useState(0);
  // const [expanded, expand] = useState(false);
  //const [images, setImages] = useState(0);
  // const [resultImages, setResultsImages] = useState([]);

  // const length = resultImages.length;
  const length = images.length;

  const nextImage = () => {
    if (current + 1 === length) {
      setCurrent(0);
    } else {
      setCurrent((current) => ( current + 1 ))
    }
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <CarouselContainer>
      {/* <ButtonContainer> */}
      {/* <LeftButton previousImage={previousImage} />
      <RightButton nextImage={nextImage} /> */}
      {/* </ButtonContainer> */}

      <StyledArrow>
        <FaChevronLeft className="" onClick={previousImage} />
      </StyledArrow>

      <HorizontalSlider>
        {
          images.map((slide, i) => {
            return (
              <div key={i}>
                {i === current && (
                  slide.url !== null ?
                  <HorizontalImage src={slide.url} alt="some ad image" /> :
                  <HorizontalImage src={require("../../RelatedItems/images/imgComingSoon.png")} />
                )}
              </div>
            )
          })
        }
      </HorizontalSlider>

      <StyledArrow>
        <FaChevronRight className="" onClick={nextImage} />
      </StyledArrow>
    </CarouselContainer>
  );
};


  export default HorizontalCarousel;

  const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  `;
  // z-index: 1;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: 350px;
    gap: 40%;
    align-items: baseline;
  `;

  export const StyledArrow = styled.div`
  align-self: center;
  font-size: 2rem;
  cursor: pointer;
`;

  // <div>
  //     <HorizontalSlider>
  //       <LeftButton previousImage={previousImage} />
  //       <RightButton nextImage={nextImage} />
  //       <button className="expand" onClick = {(event) => expand(!expanded)}>&#9744;</button>
  //       {
  //         images.map((slide, i) => {
  //           return (
  //             <div key={i}>
  //               {i === current && (
  //                 slide.url !== null ?
  //                 <HorizontalImage src={slide.url} alt="some ad image" /> :
  //                 <HorizontalImage src={require("../../RelatedItems/images/imgComingSoon.png")} />
  //               )}
  //             </div>
  //           )
  //         })
  //       }
  //     </HorizontalSlider>
  //   </div>