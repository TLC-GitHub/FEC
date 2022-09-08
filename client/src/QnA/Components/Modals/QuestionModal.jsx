import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import {ModalOverlay, ModalWrapper, ModalHeader, ModalForm, ModalCloseButton, ModalContainer} from '.././styles.jsx'






function QuestionModal({productID, toggle, curProduct, curStyle}) {

  const [state, setState] = useState({name: '', body: '', email: ''});
  const [errBody, setErrBody] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);

  useEffect(() => {
  }, [state])

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

  const handleChange = (e) => {
    const {target: {value, name} } = e;

    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendQuestion = (e) => {

    e.preventDefault()
    validateForm();

    if (!errName && !errEmail && !errBody) {
      let requestBody = {
        widget: 'qa/questions',
        bodyParams: {
          body: state.body,
          name: state.name,
          email: state.email,
          product_id:productID
        }
      }
      console.log(requestBody, 'request-body')
      axios.post('/post', requestBody)
        .then(() => {
        console.log('posted');
        toggle(false);

      })
      .catch((err) => {
        console.log('error posting')
      })
    }
  }


  return (
    <React.Fragment>
    <ModalOverlay />
    <ModalContainer>
      <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <ModalHeader>
        <ModalForm>
        <ModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
        <span aria-hidden="true">&times;</span>
      </ModalCloseButton>
        <h1>{curProduct} {curStyle} </h1> <br /> <br />
      <form className="form" onSubmit={sendQuestion}>
        <div> Question* </div>
        <input type="text" name="body" onChange={handleChange} placeholder="Write Question here"/>
        {errBody
          ? <div> this field is required <br /></div>
          : null}
        <div><br /> Enter Username* </div>
        <input type="text" name="name" placeholder="Example: jackson11!" onChange={handleChange}/>
        {errName
          ? <div> this field is required </div>
          :  <div> For privacy reasons, do not use your full name or email address  <br /></div>}
        <div> <br /> Enter email* </div>
        <input type="text" name="email" placeholder='Why did you like the product or not?' onChange={handleChange}/>
        {errEmail
          ? <div> this field is required <br /></div>
          :  <div> For authentication reasons, you will not be emailed <br /></div>}
        <input type="submit" value="submit question"/>
      </form>
      </ModalForm>
      </ModalHeader>
      </ModalWrapper>
      </ModalContainer>
      </React.Fragment>
  )
}

export default QuestionModal;