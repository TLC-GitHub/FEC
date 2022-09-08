import React, { useState, useEffect } from 'react';
import { VerticalImage, VerticalSlider } from './VerticalScrollEntry.jsx';
import DownButton from './DownButton.jsx';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

const VerticalCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [resultImages, setResultsImages] = useState([]);
  const [expanded, expand] = useState(false);

  const length = images.length;

  const nextImage = () => {
    if (current + 1 === length) {
      setCurrent(0);
    } else {
      setCurrent((current) => ( current + 1 ))
    }
  };

  return (
    <div>
      <VerticalSlider>
        <DownButton nextImage={nextImage} />
        {
          images.map((slide, i) => {
            return (
              <div key={i}>
                {i === current && (
                  slide.url !== null ?
                  <VerticalImage src={slide.url} alt="some ad image" /> :
                  <VerticalImage src={require("../../RelatedItems/images/imgComingSoon.png")} />
                )}
              </div>
            )
          })
        }
        <hr />
      </VerticalSlider>
    </div>
  );
};



export default VerticalCarousel;