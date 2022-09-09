import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import AddReviewForm from './AddReviewForm.jsx';
import axios from 'axios';
import Auth from '../../../../../config.js'
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp'

const ReviewModal = ({ productName, productID, showReviewModal, hide, metaSize, metaWidth, metaComfort, metaQuality, metaLength, metaFit }) => {

  var axiosPost = (data) => {
    axios.post(`${API_URL}/reviews`,
      data,
      {headers: Auth}
    )
    .then((response) => {
      hide();
      return console.log(response)
    })
    .catch((err) => console.log(err))
  }
  return showReviewModal ? ReactDOM.createPortal(
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
            <AddReviewForm
              axiosPost={axiosPost}
              productName={productName}
              productID={productID}
              metaSize={metaSize}
              metaWidth={metaWidth}
              metaComfort={metaComfort}
              metaQuality={metaQuality}
              metaLength={metaLength}
              metaFit={metaFit}
            />
          </p>
        </MainModal>
      </ModalWrapper>
    </React.Fragment>, document.body
) : null};

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
  background: #F0F5F9;
  position: relative;
  margin: 10rem auto;
  // margin: 1.75rem auto;
  border-radius: 1.5rem;
  width: 1000px;
  height: 900px;
  padding: 2rem;
  // border-style: inset;
  // border-width: 2em;
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
  color: black;
  cursor: pointer;
  border: none;
  // margin: 0px 140px 0px 0px;
  &:hover {
    opacity: .5;
    color: black;
  }
`;
export default ReviewModal;