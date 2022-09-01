import React from 'react';
import ReactDOM from 'react-dom';
// import { showModal, toggle } from './index.jsx';
import styled from 'styled-components'


const Modal = ({ showModal, hide, img }) => showModal ? ReactDOM.createPortal(
  <React.Fragment>
    <modalOverlay/>
    <modalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <modal>
        <modalHeader>
          <modalCloseButton type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </modalCloseButton>
      </modalHeader>
      <p>
        {img}
      </p>
      </modal>
    </modalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;

const modalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const modalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const modal = styled.div`
  z-index: 100;
  background: black;
  position: absolute;
  top: 40px; left: 40px;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

const modalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

const modalCloseButton = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`