import React from 'react';
import ReactDOM from 'react-dom';
// import { showModal, toggle } from './index.jsx';
import styled from 'styled-components'


const Modal = ({ showModal, hide, img }) => showModal ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalOverlay/>
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <MainModal>
        <ModalHeader>
          <ModalCloseButton
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
        <ImageModal>
          {img}
        </ImageModal>
      </MainModal>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;


const ImageModal = styled.p`
  width: 50%;
  height: 50%;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const MainModal = styled.div`
  z-index: 100;
  position: absolute;
  top: 15%; left: 15%;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 700px;
  padding: 1rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalCloseButton = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: .5;
  color: white;
  cursor: pointer;
  border: none;
  margin: 0px 120px 0px 0px;
  &:hover {
    opacity: .5;
    color: black;
  }
`;
export default Modal;