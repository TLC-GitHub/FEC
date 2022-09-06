import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import AddReviewForm from './AddReviewForm.jsx';

const ReviewModal = ({ showReviewModal, hide }) => showReviewModal ? ReactDOM.createPortal(
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
        <p>
          <AddReviewForm />
        </p>
      </MainModal>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;


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
  background: white;
  position: relative;
  margin: 10rem auto;
  // margin: 1.75rem auto;
  border-radius: 1.5rem;
  width: 1000px;
  height: 1000px;
  padding: 2rem;
  `;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  `;

const ModalCloseButton = styled.div`
  z-index: 1060;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: .5;
  color: green;
  cursor: pointer;
  border: none;
  // margin: 0px 140px 0px 0px;
  &:hover {
    opacity: .5;
    color: black;
  }
`;
export default ReviewModal;