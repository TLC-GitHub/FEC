import React from 'react';
import axios from 'axios';

function answerModal({questionID}) {
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
    <form onSubmit={sendAnswer}>
      <input name="body" />
      <input name="name" />
      <input name="email" />
      <input name="photos" />

    </form>


  )
}