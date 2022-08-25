import React, { useState } from 'react';
import QuestionCard from '/QuestionCard.jsx';
import helper from './server/hrapi.js';

function QuestionList() {
  //state to consider: helpfulness state onClick, answersButton onClick count, questionButton onClick count,
  let [questionCount, setQuestionCount] = useState(2);
  //get the questions data from the API endpoint
  helper.getProductInfo('qa', 'questions')
  .then((data) => {
    console.log(data);
    let data = data;
  })
  .catch((err) => {
    console.log(err);
  })
  console.log(data);
    //http request uses parameters productID(which product), page(which page), count (how many questions per page)

  return(
    <div>
      <div>
      {for (let i = 0; i < questionCount; i++) => {
        <QuestionCard question={data} setCount={setQuestionCount} />
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