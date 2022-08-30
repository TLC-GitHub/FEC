import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard.jsx';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';
import {setAnswerCount} from './AnswerModule.jsx';
import styled from 'styled-components';
import './styles.css'

function QuestionList() {
  //state to consider: helpfulness state onClick, answersButton onClick count, questionButton onClick count,
  let productID = 5;
  const [questionCount, setQuestionCount] = useState(2);
  const [questions, setQuestions] = useState([]);
  const [expandStatus, setExpandStatus] = useState(false)
  const [filteredQ, setFilteredQ] = useState([]);
  let prevQuestions = questions;


  let requestBody = {
    widget: 'qa/questions',
    queryParams: {
      page: 1,
      count: 10,
      product_id:65656
    }
  };

    const getQuestions = () => {
      axios.get('/get', {
        params: requestBody
      })
      .then((data) => {
        console.log(data.data.results.sort(), 'this is the data being sorted');
        console.log(data.data.results, 'this is data.results');
        setQuestions(data.data.results)
        setFilteredQ(data.data.results)
      })
      .catch((err) => {
        console.log('error rendering');
      })
    }

    useEffect(() => {
     getQuestions();
    }, [])


  const addMoreQuestions = () => {
    setQuestionCount(questionCount + 2);
  }

  const addQuestion = () => {
  }

  return(
    <div className="question-parent">
    <div className="question-list">
      <SearchBar setQuestions={setFilteredQ} questions={filteredQ} prevQuestions={prevQuestions}/>
        {filteredQ.slice(0, questionCount).map(question => {
          return <QuestionCard question={question} key={question.question_id} setCount={setQuestionCount}/>
        })}
    </div>
      <div className="button-container">
        {filteredQ.length < 1
      ? <div></div>
      : questionCount >= filteredQ.length
      ? <div></div>
      : <button type="button" name="loadQuestions" text="Load More Questions" onClick={addMoreQuestions}> Load More Questions </button>}
      <button type="button" name="addQuestion" text="Add A Question"> Add A Question </button>
      </div>
      </div>
  )
}

export default QuestionList;