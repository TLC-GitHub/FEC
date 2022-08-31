import React, { useState } from 'react';
import axios from 'axios';

function AnswerModal({questionID}) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  let requestBody = {
    widget: 'qa/questions',
    queryParams: 'questionID',
    bodyParams: {
      body: '',
      name: '',
      email: '',
      photos: []
    }
  }

  const handleChange = (e) => {

  }


  const sendAnswer = () => {
    requestBody.queryParams = questionID;
    requestBody.bodyParams.body = body;
    requestBody.bodyParams.name = name;
    requestBody.bodyParams.email = email;
    requestBody.bodyParams.photos = photos;


    axios.post('/post', requestBody)
      .then(() => {
        console.log('successfully posted answer');
      })
      .catch((err) => {
        console.log('error, could not post answer');
      })
  }





  return(
    <div className="answer-modal-container">
      <form onSubmit={sendAnswer}>
        <input name="body" />
        <br />
        <input name="name" />
        <br />
        <input name="email" />
        <br />
        <input name="photos" />

      </form>
    </div>

  )
}

export default AnswerModal;