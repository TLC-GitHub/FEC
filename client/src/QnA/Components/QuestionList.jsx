import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard.jsx';
import helper from '../../../.././server/hrapi.js';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';

function QuestionList() {
  //state to consider: helpfulness state onClick, answersButton onClick count, questionButton onClick count,
  let productID = 5;
  let [questionCount, setQuestionCount] = useState(2);
  let [questions, setQuestions] = useState([]);

  let requestBody = {
    widget: 'qa/questions',
    queryParams: {
      page: 1,
      count: 10,
      product_id:65656
    }
  };
  //get the questions data from the API endpoint
  let handleSearch = (query) => {
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
    return axios.get('/get', {
        params: requestBody
    })
    .then((data) => {
      console.log(data.data.results, 'this is data.results');
      setQuestions(data.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  })

    //http request uses parameters productID(which product), page(which page), count (how many questions per page)

  return(
    <div>
      <SearchBar setQuestions={setQuestions} handleSearch={handleSearch}/>
      <div>
        {questions.splice(0, questionCount).map(question => {
          return <QuestionCard question={question} setCount={setQuestionCount}/>
        })}
      </div>
      <button type="button" name="loadAnswers" text="Load more answers" />
      <div>
      <button type="button" name="loadQuestions" text="Load More Questions"/>
      <button type="button" name="addQuestion" text="Add A Question" />
      </div>
    </div>
  )
}

export default QuestionList;