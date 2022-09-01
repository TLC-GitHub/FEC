import React from 'react';
import Modal from './Modal.jsx';
import useModal from './useModal.jsx';
import  { Img } from '../styles.jsx';
import styled from 'styled-components';

const Images = ({ src, id }) => {
  const {showModal, toggle} = useModal();
  return (
    <b key={id}>
      <Img src={src} key={id} onClick={toggle}/>
      <Modal
        showModal={showModal}
        hide={toggle}
        img={<div>

          <ModalImg src={src} key={id} onClick={toggle}/>
        </div>}
      />
    </b>
  )
}

export default Images;

const ModalImg = styled.img`
  width: 150%;
  height: 150%;
  border-radius: .5em;
`;