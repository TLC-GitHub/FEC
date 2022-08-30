import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function Answer({answer, helpfulCount, setHelpfulCount}) {

  const [helpfulCountA, setHelpfulCountA] = useState(answer.helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [reportStatus, setReportStatus] = useState(false)


  let requestBody = {
    widget: 'qa/questions',
    pathVariable: '',
    subCategory: ''
  }

  useEffect(() => {
    console.log(reportStatus);
    console.log(helpfulClicked);

  }, [reportStatus, helpfulClicked])

  let date = moment(answer.date).format('MMMM Do YYYY')

  const handleAnswerHelpful = () => {
    console.log(helpfulClicked, 'helpfulClicked');
    if (!helpfulClicked) {
      requestBody.subCategory = 'helpful';
      requestBody.pathVariable = answer.answer_id;
      return axios.put('/put', requestBody)
      .then((success) => {
        console.log('succesfully voted answer helpful');
        incrementHelpful();
      })
      .catch((err) => {
        console.log('error, could not vote on answer');
      })
    }
  }

  const incrementHelpful = () => {
    setHelpfulClicked(true);
    setHelpfulCountA(helpfulCountA + 1);
  }

  const handleAnswerReport = () => {
    requestBody.subCategory = 'report';
    requestBody.pathVariable = answer.answer_id;
    return axios.put('/put', requestBody)
    .then((success) => {
      setReportStatus(true);
      console.log('successfully reported answer');
    })
    .catch((err) => {
      console.log('error, could not report answer');
    })
  }



  return (
    <div className = "answerCard" key={answer.answer_id}>
      <div className= "answer"> {answer.body}</div>
     <div> by {answer.answerer_name.toLowerCase() === 'seller' ? <span style={{fontWeight: "bold"}}> {answer.answerer_name}
     </span> : answer.answerer_name}, {date} </div>
      <div className = "helpfulCount">  Helpful?
      <button type="button" onClick={handleAnswerHelpful}> Yes </button> {helpfulCountA}
      <button type="button" text='Report nswer' onClick={handleAnswerReport}> {!reportStatus ? "Report Question" : "Reported"} </button>
      </div>
    </div>
  )
}


export default Answer;