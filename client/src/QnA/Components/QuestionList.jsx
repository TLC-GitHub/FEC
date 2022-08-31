import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard.jsx';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';
import {setAnswerCount} from './AnswerModule.jsx';
import styled from 'styled-components';
import './styles.css'
import QuestionModal from './Modals/QuestionModal.jsx';


function QuestionList() {
  //state to consider: helpfulness state onClick, answersButton onClick count, questionButton onClick count,
  const [questionCount, setQuestionCount] = useState(2);
  const [questions, setQuestions] = useState([]);
  const [filteredQ, setFilteredQ] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);


  let requestBody = {
    widget: 'qa/questions',
    queryParams: {
      page: 1,
      count: 10,
      count: 20,
      product_id:65656
    }
  };

  const handleSearch = (query) => {
    return axios.get('/get', {
        params: requestBody
    })
    .then((search) => {
      var newQuestions = search.data.results.filter(questions => {
        return questions.question_body.includes(query);
      })
      setQuestions(newQuestions);
    })
    }

  useEffect(() => {
    axios.get('/get', {
        params: requestBody
    })
    .then((data) => {
      console.log(data.data.results, 'this is data.results');
      setQuestions(data.data.results)
    })
    .catch((err) => {
      console.log('error rendering');
    })
  }, [])


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
     console.log(questionModal);
    }, [questionCount, questionModal])


  const addMoreQuestions = () => {
    setQuestionCount(questionCount + 2);
  }

  const toggleQuestionModal = () => {
    setQuestionModal(!questionModal);
  }


  return(
    <div className="qna-container">
      <div className="question-list">
        <SearchBar setQuestions={setFilteredQ} questions={filteredQ} prevQuestions={questions}/>
          {filteredQ.slice(0, questionCount).map(question => {
            return <QuestionCard question={question} key={question.question_id} setCount={setQuestionCount}/>
          })}
      </div>
        <div className="button-container">
          {filteredQ.length < 1
        ? <div></div>
        : questionCount >= filteredQ.length
        ? <div></div>
        : <button type="button" name="loadQuestions" text="Load More Questions" onClick={addMoreQuestions}> <b>Load More Questions</b> </button>}
        {!questionModal
        ? <button type="button" name="addQuestion" text="Add A Question" onClick={toggleQuestionModal}><b> Add A Question </b></button>
        : <QuestionModal productID={65656} toggle={toggleQuestionModal}/>
        }
        </div>
      </div>
  )
}

export default QuestionList;