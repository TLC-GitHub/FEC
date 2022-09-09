import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {ModalOverlay, ModalWrapper, ModalHeader, ImageModalForm, ModalCloseButton, ModalContainer, ModalImageWrapper, ModalThumbnails} from '.././styles.jsx'
import { Image } from "cloudinary-react";


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
    formData.append("file", currentImg)
    formData.append("upload_preset", "bycrdkj2")

    const postImage = async () => {
      try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/fecstorage/upload", formData)
        setCurrentFiles([...currentFiles, response.data.url])
      } catch (error) {
        console.error(error)
      }
    }
    postImage();
  }

  const handleChange = (e) => {
    setCurrentImg(e.target.files[0])

  }

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
        <ImageModalForm>
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
        </ImageModalForm>
        </ModalHeader>
      </ModalWrapper>
      </ModalContainer>
    </React.Fragment>
  )
}

export default ImageModal;