import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {ModalOverlay, ModalWrapper, ModalHeader, ModalForm, ModalCloseButton, ModalContainer, ModalImageWrapper, ModalThumbnails} from '.././styles.jsx'
import { Image } from "cloudinary-react";



//figure out how to implement cloudinary
function ImageModal({setImageModal, setState, photos, showImageModal}) {
  const [currentImg, setCurrentImg] = useState('');
  const [currentFiles, setCurrentFiles] = useState([]);
  const [maxFiles, setMaxFiles] = useState(false);

  useEffect(() => {
    if (currentFiles.length === 5) {
      setMaxFiles(true);
    }
  }, [currentFiles])


  const uploadImages = () => {
    const formData = new FormData();
    console.log(formData);
    formData.append("file", currentImg)
    formData.append("upload_preset", "bycrdkj2")
    console.log(formData);

    const postImage = async () => {
      try {
        console.log(formData);
        const response = await axios.post("https://api.cloudinary.com/v1_1/fecstorage/upload", formData)
        setCurrentFiles([...currentFiles, response.data.url])
      } catch (error) {
        console.error(error)
      }
    }
    postImage();
  }

  //every time they upload, it should convert into cloudinary url before being set as current files
  const handleChange = (e) => {
    setCurrentImg(e.target.files[0])
    // if (!maxFiles) {
    //     setCurrentFiles([...currentFiles, currentImg]);
        // setState(prev => ({
        // ...prev,
        // photos: currentFiles
        // }))
  }

//upload button will set the state of photos current files with new selected file
//submit button will set modal view back to answers

//if photos state has pictures, render out pictures underneath
  const submitImages = () => {
    setState(prev => ({
      ...prev,
      photos: currentFiles
      }))
    showImageModal();
  }

  return (
    <React.Fragment>
    <ModalOverlay />
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          <label>
          Add Photos
          </label>
        <ModalForm>
          <ModalImageWrapper>
            {currentFiles.length > 0
            ? currentFiles.map((photo, index) => {
              return <ModalThumbnails className="image-thumbnails-modal" src={photo} key={index} />
            })
            : null
          }
          </ModalImageWrapper>
          <ModalCloseButton
            type="button" data-dismiss="modal" aria-label="Close" onClick={showImageModal}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        <form className='form' onSubmit={submitImages}>
          {maxFiles
          ? null
          :<input id='upload-photos' type="file" multiple accept=".jpeg, .jpg, .png" onChange={handleChange}/>}
          <input id='photo-submit-button' type="submit" value="submit photos" />
          {maxFiles
          ? null
          : <input type="button" value="upload photo" onClick={uploadImages} />
        }
        </form>
        </ModalForm>
        </ModalHeader>
      </ModalWrapper>
      </ModalContainer>
    </React.Fragment>
  )
}

export default ImageModal;