import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import { StyledSlider, StyledInactiveItems, StyledArrow, InnerSlider } from "../Styles.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function RelatedProdSlider({ relatedProd, curProduct, selectFromRelated }) {

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
    <StyledSlider id="RelatedProducts">
      <StyledArrow>
        <FaChevronLeft className="" onClick={prevSlide} style={{display: leftDisplay}}/>
      </StyledArrow>

      <InnerSlider>
        {relatedProd.map(({ id, image, category, name, original_price, sale_price, ratings, features, styles, photos }, n) => {
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
                  photos={photos}
                  curProduct={curProduct}
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
              photos={photos}
              curProduct={curProduct}
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