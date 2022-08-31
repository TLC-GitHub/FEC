import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './styles.css'

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
  }, [reportStatus, helpfulClicked])

  let date = moment(answer.date).format('MMMM Do YYYY')

  const handleAnswerHelpful = () => {
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
    <div className= "answer"> A: {answer.body}</div>
    <div> by {answer.answerer_name},  </div>
    <div className = "helpfulCount"> Helpful?  <button type="button" onClick={handleAnswerHelpful}> Yes </button> {helpfulCountA}
    </div>
    <button type="button" text='Report Answer' onClick={handleAnswerReport}> Report Question</button>
      <div className= "answer"> {answer.body}</div>
      <div className='images'>
        {answer.photos
        ? answer.photos.map(photo => {
          return <img className="image" src={photo.url} key={photo.id}></img>})
        : null
        }
      </div>
     <div> by {answer.answerer_name.toLowerCase() === 'seller' ? <span style={{fontWeight: "bold"}}> {answer.answerer_name}
     </span> : answer.answerer_name}, {date}
     <div className="answer-info">
      <div className="helpful-count">  Helpful?
      <button className="helpful-button" type="button" onClick={handleAnswerHelpful}><u> Yes </u></button> {helpfulCountA}
      <button className="report-button" type="button" text='Report Answer' onClick={handleAnswerReport}> <u> {!reportStatus ? "Report Answer" : "Reported"} </u> </button>
      </div>
      </div>
      </div>
    </div>
  )
}


export default Answer;