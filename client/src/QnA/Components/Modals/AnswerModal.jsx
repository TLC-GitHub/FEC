import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';

function AnswerModal({questionID, toggle}) {

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

  return(
    <div className="modal-container">
      {imageModal ? <ImageModal setState={setState} showImageModal={showImageModal} photos={state.photos}/> : null}
      <form className="form" onSubmit={sendAnswer}>
      <button className="exit-button" onClick={toggle}> X </button>
        <input name="body" type="text" maxLength="1000" placeholder="Write Answer here" onChange={handleChange}/>
        {errBody
          ? <div> this field is required </div>
          : null}
        <br />
        <label>
          <p>Write Name Here</p>
          <input name="name" placeholder="Example: jack543" onChange={handleChange}/>
          <div> For privacy reasons, do not use your full name or email address </div>
          {errName
          ? <div> this field is required </div>
          : null}
          </label>
          <br />
        <label>
          <p>Write Email Here</p>
        <input name="email" placeholder="Example: jack@email.com" onChange={handleChange}/>
        <div> For authentication reasons, you will not be emailed </div>
        {errEmail
          ? <div> this field is required </div>
          : null}
        </label>
        <br />
        <input name="photos" type="button" value="Upload Photos" onClick={showImageModal}/>
        <input type="submit" value="submit answer"/>
      </form>
    </div>

  )
}


export default AnswerModal;
