import React, { useState } from 'react';
import QuestionCard from '/QuestionCard.jsx';
import helper from './server/hrapi.js';
import SearchBar from '/SearchBar.jsx';

function QuestionList() {
  //state to consider: helpfulness state onClick, answersButton onClick count, questionButton onClick count,
  let [questionCount, setQuestionCount] = useState(2);
  let [questions, setQuestions] = useState([]);
  //get the questions data from the API endpoint
  let handleSearch = (query) => {
    //product ID is queryParams
    return helper.getInfo('qa/questions', {product_id: 5})
  }

    //http request uses parameters productID(which product), page(which page), count (how many questions per page)

  return(
    <div>
      <SearchBar setQuestions={setQuestions} handleSearch={handleSearch}/>
      <div>
      {for (let i = 0; i < questionCount; i++) => {
        <QuestionCard question={questions} setCount={setQuestionCount} />
      }}
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