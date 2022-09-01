import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';










function QuestionModal({productID, toggle}) {

  const [state, setState] = useState({name: '', body: '', email: ''});
  const [errBody, setErrBody] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);

  useEffect(() => {
    console.log(errName, errEmail, errBody)

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
          product_id:65656
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
      <div className="modal-container">
      <button className="exit-button" onClick={toggle}> X </button>
      <form className="form" onSubmit={sendQuestion}>
        <button className="exit-button" onClick={toggle}> X </button>
        <input name="body" onChange={handleChange} placeholder="Write Question here"/>
        {errBody
          ? <div> this field is required </div>
          : null}
        <label>
        <p> Enter Username Here </p>
        <input name="name" placeholder="Example: jackson11!" onChange={handleChange}/>
        <div> For privacy reasons, do not use your full name or email address </div>
        {errName
          ? <div> this field is required </div>
          : null}
        </label>
        <br />
        <p> Enter email here </p>
        <input name="email" placeholder='Why did you like the product or not?' onChange={handleChange}/>
        <div> For authentication reasons, you will not be emailed </div>
        {errEmail
          ? <div> this field is required </div>
          : null}
        <input type="submit" value="submit question"/>
      </form>
    </div>
  )
}

export default QuestionModal;