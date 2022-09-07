import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {ModalOverlay, ModalWrapper, ModalHeader, ModalForm, ModalCloseButton, ModalContainer, ModalImageWrapper, ModalThumbnails} from '.././styles.jsx'
import cloudinary from "cloudinary-react";
//figure out how to implement cloudinary
function ImageModal({setImageModal, setState, photos, showImageModal}) {

  const [currentFiles, setCurrentFiles] = useState([]);
  const [maxFiles, setMaxFiles] = useState(false);

  useEffect(() => {
    if (currentFiles.length === 5) {
      setMaxFiles(true);
    }
  }, [currentFiles])


  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    var imgSrc = URL.createObjectURL(e.target.files[0]);
    if (!maxFiles) {
        setCurrentFiles([...currentFiles, imgSrc]);
        setState(prev => ({
        ...prev,
        photos: currentFiles
        }))
    }
  }

//upload button will set the state of photos current files with new selected file
//submit button will set modal view back to answers

//if photos state has pictures, render out pictures underneath
  const handlePhotos = () => {
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
          <ModalCloseButton
            type="button" data-dismiss="modal" aria-label="Close" onClick={showImageModal}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        <form className='form' onSubmit={showImageModal}>
          {maxFiles
          ? null
          :<input id='upload-photos' type="file" multiple accept=".jpeg, .jpg, .png" onChange={handleChange}/>}
          <input id='photo-submit-button' type="submit" value="submit photos" />
        </form>
        <ModalImageWrapper>
          {currentFiles.length > 0
          ? currentFiles.map((photo, index) => {
            return <ModalThumbnails className="image-thumbnails-modal" src={photo} key={index} />
          })
          : null
        }
        </ModalImageWrapper>
        </ModalForm>
        </ModalHeader>
      </ModalWrapper>
      </ModalContainer>
    </React.Fragment>
  )
}

export default ImageModal;