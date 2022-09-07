import React, { useState, useEffect } from 'react';
import { HorizontalImage, HorizontalSlider } from './HorizontalScrollEntry.js';
import RightButton from './RightButton.jsx';
import LeftButton from './LeftButton.jsx';
import axios from 'axios';
import Authorization from '../../../../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';


const HorizontalCarousel = ({curStyle}) => {

  console.log("what is the curProduct in horizontal carousel: ", curStyle);
  const [current, setCurrent] = useState(0);
  //const [images, setImages] = useState(0);
  const [resultImages, setResultsImages] = useState([]);
  const [expanded, expand] = useState(false);

  // const images = [
  //   {image: 'https://images.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'},

  //   {image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80'},

  //   {image: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},

  //   {image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2120&q=80'}
  // ]

  // useEffect(() => {
  //   axios.get(`${API_URL}/reviews?product_id=65651&sort=newest&count=200`, {
  //     headers: Authorization
  //   })
  //     .then((response) => {
  //       setResultsImages(response.data.results[0].photos)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, []);

  // const length = resultImages.length;
  // const images = curStyle;
  // const numOfImages = curStyle.length;
  // console.log("images length: ", numOfImages);

  const nextImage = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }


    return (
    <div>
      <HorizontalSlider>
      {/* <LeftButton previousImage={previousImage} />
      <RightButton nextImage={nextImage} />
      <button className="expand" onClick = {(event) => expand(!expanded)}>&#9744;</button> */}
      {/* {resultImages.map((slide, i) => {
        return (
          <div key={i}>
            {i === current && (
              resultImages ? <HorizontalImage expanded={expanded} src={slide.url} alt="some ad image" /> : 'No images availale'
            )}
          </div>
        );
      })} */}

      {/* {
      curStyle.map((slide, i) => {
        return (
          <HorizontalImage src={slide.url} />
        )
      })

      } */}


      </HorizontalSlider>
    </div>
    );
  };



  export default HorizontalCarousel;