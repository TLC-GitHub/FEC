import React from 'react';
import Modal from './Modal.jsx';
import useModal from './useModal.jsx';
import  { Img } from '../styles.jsx';

const Images = ({ src, id }) => {
  const {showModal, toggle} = useModal();
  return (
    <b key={id}>
      <Img src={src} key={id} onClick={toggle}/>
      <Modal
        showModal={showModal}
        hide={toggle}
        img={<div>

          <Img src={src} key={id} onClick={toggle}/>
        </div>}
      />
    </b>
  )
}

export default Images;