import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerCard from './AnswerCard.jsx';
import styled from 'styled-components';
import { AnswerContainer, Button, Wrapper, LoadMoreAnswers } from './styles.jsx';

function AnswerModule({questionID}) {
  //should sort the incoming answers according to seller > helpfulness > rest

  const [answerCount, setAnswerCount] = useState(2);
  const [answers, setAnswers] = useState([]);

  let requestBody = {
    widget: 'qa/questions',
    pathVariable: '',
    subCategory: ''
  }

  let requestBodyGet = {
    widget: `qa/questions/${questionID}/answers`,
    queryParams: {
      page: 1,
      count: 40
    }
  }


  useEffect(() => {
    getAnswers();
  }, [])


  const addMoreAnswers = () => {
    setAnswerCount(answerCount + 2);
    setAnswerCount(answers.length);
  }

  const resetAnswers = () => {
    setAnswerCount(2);
  }

  const getAnswers = () => {
    return axios.get('/get', {
      params: requestBodyGet
    })
    .then((answers) => {
      let result = answers.data.results.sort((a, b) => {
        if (a.answerer_name.toLowerCase() === 'seller') {
          return -1
        }
        if (a.helpfulness < b.helpfulness) {
          return 1
        }
        return 0;
      })
      setAnswers(result);
      })
    .catch((err) => {
      console.log(err, 'this is getAnswer error');
    })
  }

  return (
    <AnswerContainer>
      {answers.length < 1
        ? null
        : <b> A: </b>
      }
      {answers.slice(0, answerCount).map(answer => {
      return <AnswerCard answer={answer} key={answer.answer_id}/>
      })}
      <LoadMoreAnswers>
        {answers.length <= 2
          ? null
          : answerCount < answers.length
          ? <Button onClick={addMoreAnswers}> <b>Load More Answers</b> </Button>
          : <Button onClick={resetAnswers}> <b>Hide Answers</b> </Button>
        }
      </LoadMoreAnswers>
    </AnswerContainer>
    )
}

export default AnswerModule;
