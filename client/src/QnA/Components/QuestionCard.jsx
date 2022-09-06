
import React, {useState, useEffect } from 'react';
import AnswerModule from './AnswerModule.jsx';
import axios from 'axios';
import AnswerModal from './Modals/AnswerModal.jsx';
import styled from 'styled-components';
import {Button, QuestionInfo, QuestionCardContainer, QuestionBody, QuestionWrapper} from './styles.jsx';


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

  console.log(setAnswerModal);

  useEffect(() => {
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
    if (!reportStatusQ) {
      requestBody.subCategory = 'report'
      return axios.put('/put', requestBody)
      .then((success) => {
        setReportStatusQ(!reportStatusQ);
        console.log('successfully reported');
      })
      .catch((err) => {
        console.log('error, could not report');
      })
    }
  }


  const incrementHelpful = () => {
    setHelpfulStatusQ(true)
    setHelpfulCount(helpfulCount + 1)
  }

  const toggleAnswerModal = () => {
      setAnswerModal(!answerModal);
  }

  if (answerModal) {
    return(
        <AnswerModal questionID={question.question_id} toggle={toggleAnswerModal}/>
    )
  } else {

    return (
    <QuestionCardContainer>
      <QuestionWrapper>
        <QuestionBody> Q: {question.question_body} </QuestionBody>
        <QuestionInfo>
            <Button onClick={handleHelpfulness}> Helpful? <u> Yes  </u> ({helpfulCount}) </Button>
            <Button onClick={toggleAnswerModal}> <u>Add Answer</u> </Button>
            <Button onClick = {handleReport}> <u>
              {reportStatusQ
                ? 'Reported'
                : 'Report Question'} </u>
            </Button>
          </QuestionInfo>
        </QuestionWrapper>
      <AnswerModule questionID={question.question_id} />
    </QuestionCardContainer>
  )
  }
}

export default QuestionCard;