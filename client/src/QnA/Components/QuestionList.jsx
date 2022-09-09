import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard.jsx';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';
import QuestionModal from './Modals/QuestionModal.jsx';
import styled from "styled-components";
import { QuestionContainer, BigButton, ButtonContainer } from './styles.jsx';








function QuestionList({productID, curProduct, curStyle}) {
  //state to consider: helpfulness state onClick, answersButton onClick count, questionButton onClick count,
  const [questionCount, setQuestionCount] = useState(2);
  const [questions, setQuestions] = useState([]);
  const [filteredQ, setFilteredQ] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);


  const handleSearch = (query) => {

    let requestBody = {
      widget: 'qa/questions',
      queryParams: {
        page: 1,
        count: 50,
        product_id: productID
      }
    };

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
    let requestBody = {
      widget: 'qa/questions',
      queryParams: {
        page: 1,
        count: 50,
        product_id: productID
      }
    };

    axios.get('/get', {
        params: requestBody
    })
    .then((data) => {
      setQuestions(data.data.results)
      setFilteredQ(data.data.results)
      console.log(questions, 'after setting questions state')
      console.log(filteredQ, 'after setting state')
    })
    .catch((err) => {
      console.log('error rendering');
    })
  }, [productID])


  const getQuestions = () => {

    let requestBody = {
      widget: 'qa/questions',
      queryParams: {
        page: 1,
        count: 50,
        product_id: productID
      }
    };

    axios.get('/get', {
      params: requestBody
    })
    .then((data) => {
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
    <div>
      <SearchBar setQuestions={setFilteredQ} questions={filteredQ} prevQuestions={questions}/>
      <QuestionContainer>
          {filteredQ.slice(0, questionCount).map(question => {
            return <QuestionCard question={question} key={question.question_id} setCount={setQuestionCount}/>
          })}
          <ButtonContainer>
          {filteredQ.length < 1
        ? null
        : questionCount >= filteredQ.length
        ? null
        : <BigButton onClick={addMoreQuestions}> <b>More Questions</b> </BigButton>}
        {!questionModal
        ? <BigButton onClick={toggleQuestionModal}> <b>Add A Question</b></BigButton>
        : <QuestionModal productID={productID} toggle={toggleQuestionModal} curProduct={curProduct.name} curStyle={curStyle.name}/>
      }
        </ButtonContainer>
      </QuestionContainer>
      </div>
  )
}

export default QuestionList;