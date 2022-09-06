import React, { useState, useEffect } from 'react';
import { VerticalImage, VerticalSlider } from './VerticalScrollEntry.jsx';
import DownButton from './DownButton.jsx';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';


const VerticalCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [resultImages, setResultsImages] = useState([]);
  const [expanded, expand] = useState(false);

  // const images = [
  //   {image: 'https://images.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'},

  //   {image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80'},

  //   {image: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},

  //   {image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2120&q=80'}
  // ]

  useEffect(() => {
    axios.get(`${API_URL}/reviews?product_id=65651&sort=newest&count=200`, {
      headers: Authorization
    })
      .then((response) => {
        setResultsImages(response.data.results[0].photos)
      })
      .catch((err) => {
        console.log(err.toJSON());
      })
  }, []);

  const length = resultImages.length;

  const nextImage = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

    return (
    <div>
      <VerticalSlider>
        <DownButton nextImage={nextImage} />
        {resultImages.map((slide, i) => {
          return (
            <div key={i}>
              {i === current && (
                <VerticalImage src={slide.url} alt="some ad image" />
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