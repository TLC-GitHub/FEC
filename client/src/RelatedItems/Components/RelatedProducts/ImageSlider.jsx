import React, { useState, useEffect } from 'react';
import { StyledArrow, ImagesSlider, ImageSlide, StyledInactiveItems } from "../Styles.jsx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function ImageSlider({ id, photos, changeOfImage }) {

  const [firstImg, setFirstImg] = useState(0);
  const [lastImg, setLastImg] = useState(2);
  const [leftDisplay, setLeftDisplay] = useState('');
  const [rightDisplay, setRightDisplay] = useState('');
  let numOfImg = photos.length;

  useEffect (() => {


  }, [])

  const nextImage = () => {
    if (lastImg + 1 <= numOfImg - 1) {
      setFirstImg(firstImg + 1)
      setLastImg(lastImg + 1);
    } else {
      setFirstImg(0);
      setLastImg(2);
    }
  };

  const prevImage = () => {
    if (firstImg - 1 >= 0) {
      setFirstImg(firstImg - 1);
      setLastImg(lastImg - 1);
    } else {
      setFirstImg(0);
      setLastImg(2);
    }
  };

  const selectImage = (e) => {
    console.log(e.target.src);
    changeOfImage(e.target.src);
  }

  return (
    <ImagesSlider>
      <StyledArrow style={{fontSize: "0.5rem", width: "5%"}}>
        <FaChevronLeft
          onClick={prevImage}
        />
      </StyledArrow>

        {photos.map((photo, n) => {
          if (n < firstImg || n > lastImg) {
            return (
              <StyledInactiveItems key={photo.thumbnail_url}>
                <ImageSlide
                  src={photo.thumbnail_url}
                  onClick={selectImage}
                />
              </StyledInactiveItems>
            )
          } else {
            return (
              <ImageSlide
                key={photo.thumbnail_url}
                src={photo.thumbnail_url}
                onClick={selectImage}
              />
            )
          }
        })}

      <StyledArrow style={{fontSize: "0.5rem", width: "5%"}}>
        <FaChevronRight
          onClick={nextImage}
        />
      </StyledArrow>
    </ImagesSlider>
   )
  }

  export default ImageSlider;