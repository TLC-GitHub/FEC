import React, { useState, useEffect } from 'react';
import {ModalOverlay, ModalWrapper, ModalHeader, ModalForm, ModalCloseButton, ModalContainer, ModalImageWrapper, ModalThumbnails, ExpandedImage} from '.././styles.jsx';

function ExpandImageModal ({setClickedImage, clickedImage}) {

  return (
    <React.Fragment>
      <ModalOverlay/>
    <ModalContainer>
    <ModalCloseButton
     type="button" data-dismiss="modal" aria-label="Close" onClick={(e) => {setClickedImage(null)}}>
     <span aria-hidden="true">&times;</span>
     </ModalCloseButton>
     <ExpandedImage src={clickedImage} />
    </ModalContainer>
    </React.Fragment>
  )
}

export default ExpandImageModal;