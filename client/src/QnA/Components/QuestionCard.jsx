import React, {useState, useEffect } from 'react';
import AnswerModule from './AnswerModule.jsx';
import axios from 'axios';
import AnswerModal from './Modals/AnswerModal.jsx';


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
  const [answerModal, setAnswerModal] = useState(false);

  useEffect(() => {
    console.log(helpfulStatusQ, reportStatusQ, answerModal)
  }, [helpfulStatusQ, reportStatusQ, answerModal])

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

  const addAnswer = () => {
    setAnswerModal(true);
  }
  if (answerModal) {
    return(
      <div className="answer-modal-component">
        <AnswerModal questionID={question.question_id}/>
      </div>
    )
  } else {

    return (
    <div className="question-card">
        <h1 className="question-body"> Q: {question.question_body} </h1>
          <div> Helpful? </div>
            <button className="helpful-button" onClick={handleHelpfulness}><u> Yes </u> </button>
            <div className="helpful-count">{helpfulCount}</div>
            <button className="add-answer-button" onClick={addAnswer}> <u>Add Answer</u></button>
        <div>
        <button className="report-button" onClick = {handleReport}> <u>{reportStatusQ ? 'Reported' : 'Report Question'} </u></button>
        </div>
        <div>
          {<AnswerModule questionID={question.question_id}/>}
        </div>
    </div>
  )
  }
}

export default QuestionCard;