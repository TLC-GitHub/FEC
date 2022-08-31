<<<<<<< HEAD
import React, { useState } from 'react';
=======
<<<<<<< HEAD
import React from 'react';
=======
import React from 'react';
>>>>>>> e111f43c61d1c18b30bf9a5f2e3c9b67f6060218
import axios from 'axios';

function QuestionModal({productID}) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

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

  }

  const sendQuestion = () => {
    requestBody.bodyParams.body = question;
    requestBody.bodyParams.name = username;
    requestBody.bodyParams.email = email;

    axios.post('/post', requestBody)
      .then(() => {
      console.log('posted');
    })
    .catch((err) => {
      console.log('error posting')
    })
  }


  return(
    <div className="question-modal-container">
      <form className="question-form" onSubmit={sendQuestion}>
        <input name="body" onChange={handleChange}/>
        <br />
        <input name="name" onChange={handleChange}/>
        <br />
        <input name="email" onChange={handleChange}/>
        <br />

      </form>
    </div>

  )

}
<<<<<<< HEAD

export default QuestionModal;
=======
>>>>>>> main
>>>>>>> e111f43c61d1c18b30bf9a5f2e3c9b67f6060218
