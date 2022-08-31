import React, { useState } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal.jsx';

function AnswerModal({questionID, toggle}) {

  const [state, setState] = useState({});
  const [imageModal, setImageModal] = useState(false);


  let requestBody = {
    widget: 'qa/questions',
    queryParams: questionID,
    bodyParams: {
      body: '',
      name: '',
      email: '',
      photos: []
    },
    subCategory: 'answers'
  }

  const showImageModal = () => {
    setImageModal(true);
  }

  const handleChange = (e) => {
    const {target: {value, name} } = e;

    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const sendAnswer = (e) => {
    e.preventDefault();

    requestBody.bodyParams.body = state.body;
    requestBody.bodyParams.name = state.name;
    requestBody.bodyParams.email = state.email;
    requestBody.bodyParams.photos = state.photos

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

  if (imageModal) {

    return(
      <ImageModal setState={setState} setImageModal={setImageModal}/>
    )
  } else {



  return(
    <div className="modal-container">
      <form className="form" onSubmit={sendAnswer}>
      <button className="exit-button" onClick={toggle}> X </button>
        <input name="body" type="text" maxLength="1000" placeholder="Write Answer here" onChange={handleChange}/>
        <br />
        <label>
          <p>Write Name Here</p>
          <input name="name" placeholder="Example: jack543" onChange={handleChange}/>
          <div> For privacy reasons, do not use your full name or email address </div>
          </label>
          <br />
        <label>
          <p>Write Email Here</p>
        <input name="email" placeholder="Example: jack@email.com" onChange={handleChange}/>
        <div> For authentication reasons, you will not be emailed </div>
        </label>
        <br />
        <input name="photos" type="button" value="Upload Photos" onClick={showImageModal}/>
        <input type="submit" value="submit answer"/>
      </form>
    </div>

  )
  }
}

export default AnswerModal;
