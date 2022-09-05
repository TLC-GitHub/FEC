import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import { StyledSlider, StyledInactiveItems, StyledArrow, InnerSlider } from "../Styles.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function ImageSlider({ relatedProd, curProduct, curStyle, selectFromRelated }) {
    console.log('related products in slider: ', relatedProd)

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const [leftDisplay, setLeftDisplay] = useState('none');
    const [rightDisplay, setRightDisplay] = useState('none');
    let length = relatedProd.length;

    useEffect (() => {
      length = relatedProd.length;
      setStart(0);
      setEnd(4);
      setLeftDisplay('none');

      if(length > 5) {
        setRightDisplay('');
      } else {
        setRightDisplay('none');
      }
    }, [relatedProd])

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
        {relatedProd.map(({ id, image, category, name, original_price, sale_price, ratings, features, styles }, n) => {
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
                  ratings={ratings}
                  features={features}
                  styles={styles}
                  curProduct={curProduct}
                  curStyle={curStyle}
                  selectFromRelated={selectFromRelated}
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
              ratings={ratings}
              features={features}
              styles={styles}
              curProduct={curProduct}
              curStyle={curStyle}
              selectFromRelated={selectFromRelated}
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