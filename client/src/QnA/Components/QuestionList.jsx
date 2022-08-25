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
      <button type="button" name="loadQuestions" text="Load More Questions"/> <button type="button" name="addQuestion" text="Add A Question" />
      </div>
    </div>
  )
}

/*
{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}
*/