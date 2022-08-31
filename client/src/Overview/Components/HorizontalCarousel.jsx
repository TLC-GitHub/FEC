import React, { useState } from 'react';
import { HorizontalImage, HorizontalSlider } from './HorizontalScrollEntry.js';
import RightButton from './RightButton.jsx';
import LeftButton from './LeftButton.jsx';
//import ExpandShrinkButton from './ExpandShrinkButton.jsx';


const HorizontalCarousel = () => {

  const [current, setCurrent] = useState(0);
  const [expanded, expand] = useState(false);

  const images = [
    {image: 'https://images.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'},

    {image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80'},

    {image: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},

    {image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2120&q=80'}
  ]

  const length = images.length;

  const nextImage = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }


    return (
    <div>
      <HorizontalSlider>
        <LeftButton previousImage={previousImage} />
        <RightButton nextImage={nextImage} />
        <button onClick = {(event) => expand(!expanded)}>&#9744;</button>
        {images.map((slide, i) => {
          console.log('slide ', slide); console.log('slide ', slide);
          return (
            <div key={i}>
              {i === current && (
                <HorizontalImage expanded={expanded} src={slide.image} alt="some ad image" />
              )}
            </div>
          );
        })}
      </HorizontalSlider>
    </div>
    );
  };



export default HorizontalCarousel;