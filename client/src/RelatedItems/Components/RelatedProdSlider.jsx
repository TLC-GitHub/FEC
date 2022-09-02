import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import { StyledSlider, StyledInactiveItems, StyledArrow, InnerSlider } from "./Styles.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const axios = require('axios');

function RelatedProdSlider({relatedProd, productID, curProduct}) {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const [leftDisplay, setLeftDisplay] = useState('none');
    const [rightDisplay, setRightDisplay] = useState('');
    const length = Object.keys(relatedProd).length;

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
      <StyledArrow>
        <FaChevronLeft className="" onClick={prevSlide} style={{display: leftDisplay}}/>
      </StyledArrow>

      <InnerSlider>
        {relatedProd.map(({ id, image, category, name, original_price, sale_price }, n) => {
          if (n < start || n > end) {
            return (
              <StyledInactiveItems key={id}>
                <ProductCard
                  id={id}
                  image={image}
                  category={category}
                  name={name}
                  original_price={original_price}
                  sale_price={sale_price}
                  productID={productID}
                  curProduct={curProduct}
                  />
              </StyledInactiveItems>
            )
          } else {
            return (
              <ProductCard
              key={id}
              id={id}
              image={image}
              category={category}
              name={name}
              original_price={original_price}
              sale_price={sale_price}
              productID={productID}
              curProduct={curProduct}
              />
            )
          }
        })}
      </InnerSlider>

      <StyledArrow>
        <FaChevronRight className="" onClick={nextSlide} style={{display: rightDisplay}}/>
      </StyledArrow>
    </StyledSlider>
  )
}

export default RelatedProdSlider;