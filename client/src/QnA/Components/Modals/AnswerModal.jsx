import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';
import {ModalForm, ModalOverlay, ModalCloseButton, ModalHeader, ModalWrapper, ModalContainer} from '.././styles.jsx';


function AnswerModal({questionID, toggle, question}) {

  const [state, setState] = useState({body: '', name: '', email: ''});
  const [imageModal, setImageModal] = useState(false);
  const [errBody, setErrBody] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);


  const showImageModal = () => {
    setImageModal(!imageModal);
  }

  useEffect(() => {
    console.log(errBody, errName, errEmail);
  }, [state])

  const handleChange = (e) => {
    const {target: {value, name} } = e;

    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const validateForm = () => {
    const name = state.name;
    const body = state.body;
    const email = state.email;

    if (!name) {
      setErrName(true);
    }
    if (!body) {
      setErrBody(true);
    }
    if (!isValidEmail(email)) {
      setErrEmail(true);
    }
  }

  const sendAnswer = (e) => {
    e.preventDefault();

    validateForm();

    if (!errBody && !errEmail && !errName) {
      let requestBody = {
        widget: 'qa/questions',
        queryParams: questionID,
        bodyParams: {
          body: state.body,
          name: state.name,
          email: state.email,
          photos: state.photos
        },
        subCategory: 'answers'
      }

      axios.post('/post', requestBody)
        .then(() => {
          console.log('successfully posted answer');
          toggle();
        })
        .catch((err) => {
          console.log(err);
          console.log('error, could not post answer');
        })
    }
  }

  return (
    <React.Fragment>
    <ModalOverlay />
    <ModalContainer>
      <ModalWrapper>
      {imageModal ? <ImageModal setState={setState} showImageModal={showImageModal} photos={state.photos}/> : null}
      <ModalHeader>
      <ModalForm>
        <ModalCloseButton
          type="button"
          className="exit-button"
          onClick={toggle}
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
          <h1>{question}</h1>
          <form onSubmit={sendAnswer}>
            <input name="body" type="text" maxLength="1000" placeholder="Write Answer here" onChange={handleChange}/>
            {errBody
              ? <div> this field is required </div>
              : null}
            <label>
              <div><br />Name*</div>
              <input name="name" placeholder="Example: jack543" onChange={handleChange}/>
              {errName
              ? <div> this field is required </div>
              :  <div> For privacy reasons, do not use your full name or email address </div>}
              </label>
              <br />
            <label>
              <div>Email*</div>
            <input name="email" placeholder="Example: jack@email.com" onChange={handleChange}/>
            {errEmail
              ? <div> this field is required </div>
              : <div> For authentication reasons, you will not be emailed </div>}
            </label>
            <br />
            <input name="photos" type="button" value="Upload Photos" onClick={showImageModal}/>
            <input type="submit" value="submit answer"/>
          </form>
      </ModalForm>
      </ModalHeader>
      </ModalWrapper>
      </ModalContainer>
      </React.Fragment>
  )
}


export default AnswerModal;
