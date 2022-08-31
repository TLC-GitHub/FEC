import React, {useState, useEffect } from 'react';
import AnswerModule from './AnswerModule.jsx';
import axios from 'axios';

function QuestionCard ({question, setCount, answerCount, answers, setAnswers}) {

  let requestBody = {
    widget: 'qa/questions',
    pathVariable: question.question_id,
    subCategory: ''
  }

  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness);
  const [reportedQuestions, setReportedQuestions] = useState([]);
  const [helpfulStatusQ, setHelpfulStatusQ] = useState(false);
  const [reportStatusQ, setReportStatusQ] = useState(false);

  useEffect(() => {
    console.log(helpfulStatusQ, reportStatusQ)
  }, [helpfulStatusQ, reportStatusQ])

  const handleHelpfulness = () => {
    if (!helpfulStatusQ) {
      requestBody.subCategory = 'helpful';
      return axios.put('/put', requestBody)
        .then((success) => {
          console.log('successfully voted');
          incrementHelpful();
        })
      .catch((err) => {
        console.log('error, could not add helpfulness');
      })
    }
  }

  const handleReport = () => {
    requestBody.subCategory = 'report'
    return axios.put('/put', requestBody)
    .then((success) => {
      setReportStatusQ(true);
      console.log('successfully reported');
    })
    .catch((err) => {
      console.log('error, could not report');
    })

  }

  const incrementHelpful = () => {
    setHelpfulStatusQ(true)
    setHelpfulCount(helpfulCount + 1)
  }

  return (
    <div className="question-card">
        <h1> Q: {question.question_body} </h1>
        <div> Helpful?
        <button onClick={handleHelpfulness}> Yes </button> {helpfulCount}
        </div>
        <div>
        <button onClick = {handleReport}> {reportStatusQ ? 'Reported' : 'Report Question'} </button>
        </div>
        <div>
          {<AnswerModule questionID={question.question_id}/>}
        </div>
    </div>
  )
}

export default QuestionCard