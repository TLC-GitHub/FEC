import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Answer({answer, helpfulCount, setHelpfulCount}) {

  const [helpfulCountA, setHelpfulCountA] = useState(answer.helpfulness)

  let requestBody = {
    widget: 'qa/questions',
    pathVariable: '',
    subCategory: ''
  }

  const handleAnswerHelpful = () => {
    requestBody.subCategory = 'helpful';
    requestBody.pathVariable = answer.answer_id;
    return axios.put('/put', requestBody)
    .then((success) => {
      console.log('succesfully voted answer helpful');
      setHelpfulCountA(helpfulCountA + 1);
    })
    .catch((err) => {
      console.log('error, could not vote on answer');
    })
  }

  const handleAnswerReport = () => {
    requestBody.subCategory = 'report';
    requestBody.pathVariable = answer.answer_id;
    return axios.put('/put', requestBody)
    .then((success) => {
      console.log('successfully reported answer');
    })
    .catch((err) => {
      console.log('error, could not report answer');
    })
  }



  return (
    <div className = "answerCard" key={answer.answer_id}>
    <div className= "answer"> A: {answer.body}</div>
    <div> by {answer.answerer_name},  </div>
    <div className = "helpfulCount"> Helpful?  <button type="button" onClick={handleAnswerHelpful}> Yes </button> {helpfulCountA}
    </div>
    <button type="button" text='Report Answer' onClick={handleAnswerReport}> Report Question</button>
    </div>
  )
}


export default Answer;