import React, {useState} from 'react';
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

  const handleHelpfulness = () => {
    requestBody.subCategory = 'helpful';
    return axios.put('/put', requestBody)
    .then((success) => {
      console.log('successfully voted');
      setHelpfulCount(helpfulCount + 1);
    })
    .catch((err) => {
      console.log('error, could not add helpfulness');
    })
  }

  const handleReport = () => {
    requestBody.subCategory = 'report'
    return axios.put('/put', requestBody)
    .then((success) => {
      console.log('successfully reported');
    })
    .catch((err) => {
      console.log('error, could not report');
    })

  }

  return (
    <div className="question-card">
        <h1> Q: {question.question_body} </h1>
        <div> Helpful?
        <button onClick={handleHelpfulness}> Yes </button> {helpfulCount}
        </div>
        <div>
        <button onClick = {handleReport}> Report Question </button>
        </div>
        <div>
          {<AnswerModule questionID={question.question_id}/>}
        </div>
    </div>
  )
}

export default QuestionCard