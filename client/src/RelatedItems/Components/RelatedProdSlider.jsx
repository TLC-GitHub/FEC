import React, { useState } from 'react';
import "./RelatedProducts.css";
import ProductCard from './ProductCard.jsx';
import { StyledSlider, StyledInactiveItems } from "./SlideCard.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const axios = require('axios');

function RelatedProdSlider({relatedProd}) {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const [leftDisplay, setLeftDisplay] = useState('none');
    const [rightDisplay, setRightDisplay] = useState('');
    const length = relatedProd.length;

    const nextSlide = () => {
      if (end + 1 <= length - 1) {
        setStart(start + 1)
        setEnd(end + 1);
        setLeftDisplay('');
      }
      if (end === length - 2) {
        setRightDisplay('none');
      }
    };

    const prevSlide = () => {
      if (start - 1 >= 0) {
        setStart(start - 1);
        setEnd(end - 1);
        setRightDisplay('');
      }
      if (start === 1) {
        setLeftDisplay('none');
      }
    };

  return (
    <StyledSlider>
      <FaChevronLeft className="leftArrow" onClick={prevSlide} style={{display: leftDisplay}}/>
      <FaChevronRight className="rightArrow" onClick={nextSlide} style={{display: rightDisplay}}/>
      <div className="relatedProd_container">
        {/* <div className="card-container"> */}
          {relatedProd.map(({ id, image, category, name, original_price, sale_price }, n) => {
            // let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            // return(
            //   <div key={id}>
            //     <ProductCard
            //       image={image}
            //       category={category}
            //       name={name}
            //       original_price={original_price}
            //       sale_price={sale_price}
            //       cardStyle={position}
            //       />
            //   </div>
            // )

            if (n < start || n > end) {
              return (
                <StyledInactiveItems>
                  <div key={id}>
                  <ProductCard
                    image={image}
                    category={category}
                    name={name}
                    original_price={original_price}
                    sale_price={sale_price}
                    />
                  </div>
                </StyledInactiveItems>
              )
            } else {
              return (
                <div key={id}>
                  <ProductCard
                    image={image}
                    category={category}
                    name={name}
                    original_price={original_price}
                    sale_price={sale_price}
                    />
                  </div>
              )
            }

          }
          )}
        {/* </div> */}
      </div>
   </StyledSlider>
  )
}

export default RelatedProdSlider;