import React from 'react';
import axios from 'axios';

function questionModal() {
  const [username, setUsername] = setState('');
  const [email, setEmail] = setState('');
  const [question, setQuestion] = setState('');

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
    <form className="question-form" onSubmit={sendQuestion}>
      <input name="body" onChange={handleChange}/>
      <input name="name" onChange={handleChange}/>
      <input name="email" onChange={handleChange}/>

    </form>

  )

}