import React, { useState } from 'react';
import { VerticalImage, VerticalSlider } from './VerticalScrollEntry.jsx';
import DownButton from './DownButton.jsx';


const VerticalCarousel = () => {

  const [current, setCurrent] = useState(0);

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
      <VerticalSlider>
        <DownButton nextImage={nextImage} />
        {images.map((slide, i) => {
          return (
            <div key={i}>
              {i === current && (
                <VerticalImage src={slide.image} alt="some ad image" />
              )}
            </div>
          );
        })}
        <hr />
      </VerticalSlider>
    </div>
    );
  };



export default VerticalCarousel;