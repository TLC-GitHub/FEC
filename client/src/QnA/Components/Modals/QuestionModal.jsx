import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function QuestionModal({productID, toggle}) {

  const [state, setState] = useState({});

  let requestBody = {
    widget: 'qa/questions',
    bodyParams: {
      body: '',
      name: '',
      email: '',
      product_id:65656
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

    requestBody.bodyParams.body = state.body;
    requestBody.bodyParams.name = state.name;
    requestBody.bodyParams.email = state.email;

    axios.post('/post', requestBody)
      .then(() => {
      console.log('posted');
      setQuestionModal(false);

    })
    .catch((err) => {
      console.log('error posting')
    })
  }


  return (
      <div className="modal-container">
      <button className="exit-button" onClick={toggle}> X </button>
      <form className="form" onSubmit={sendQuestion}>
        <button className="exit-button" onClick={toggle}> X </button>
        <input name="body" onChange={handleChange} placeholder="Write Question here"/>
        <label>
        <p> Enter Username Here</p>
        <input name="name" placeholder="Example: jackson11!" onChange={handleChange}/>
        <div> For privacy reasons, do not use your full name or email address </div>
        </label>
        <br />
        <p> Enter email here Here</p>
        <input name="email" placeholder='Why did you like the product or not?' onChange={handleChange}/>
        <div> For authentication reasons, you will not be emailed </div>
        <input type="submit" value="submit question"/>
      </form>
    </div>
  )
}

export default QuestionModal;