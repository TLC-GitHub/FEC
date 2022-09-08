import React, { useState, useEffect } from 'react';
import {ModalOverlay, ModalWrapper, ModalHeader, ModalForm, ModalCloseButton, ImageModalContainer, ModalImageWrapper, ModalThumbnails, ExpandedImage} from '.././styles.jsx';

function ExpandImageModal ({setClickedImage, clickedImage}) {

  return (
    <React.Fragment>
      <ModalOverlay/>
    <ImageModalContainer >
    <ModalCloseButton
     type="button" data-dismiss="modal" aria-label="Close" onClick={(e) => {setClickedImage(null)}}>
     <span aria-hidden="true">&times;</span>
     </ModalCloseButton>
     <ExpandedImage src={clickedImage} />
    </ImageModalContainer>
    </React.Fragment>
  )
}

export default ExpandImageModal;
//set image src as background