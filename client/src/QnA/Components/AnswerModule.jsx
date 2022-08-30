import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

function AnswerModule({questionID}) {
  //should sort the incoming answers according to seller > helpfulness > rest

  const [answerCount, setAnswerCount] = useState(2);
  const [answers, setAnswers] = useState([]);

  let requestBodyGet = {
    widget: 'qa/questions',
    pathVariable: questionID,
    queryParams: {
      page: 1,
      count: 5
    },
    subCategory: 'answers'
  }


  useEffect(() => {
    getAnswers();
  }, [])


  const addMoreAnswers = () => {
    setAnswerCount(answerCount + 2);
  }

  const getAnswers = () => {
    return axios.get('/get', {
      params: requestBodyGet
    })
    .then((answers) => {
      console.log(answers, 'this is answers');
      setAnswers(answers.data.results);
      })
    .catch((err) => {
      console.log(err, 'this is getAnswer error');
    })
  }

  return (
    <div className="answer-list">
      {answers.slice(0, answerCount).map(answer => {
        return <Answer answer={answer} key={answer.answer_id} helpfulCount={helpfulCountA} setHelpfulCount={setHelpfulCountA}/>
      })}
      <div>
        <button type="button" name="loadAnswers" text="Load more answers" onClick={addMoreAnswers}> Load More Answers </button>
      </div>
    </div>
  )
}

export default AnswerModule;

// <div className = "answerCard" key={answer.answer_id}>
// <div className= "answer"> A: {answer.body}</div>
// <div> by {answer.answerer_name},  </div>
// <div className = "helpfulCount"> Helpful?  <button type="button" onClick={() => {handleAnswerHelpful(answer.answer_id)}}> Yes </button> {helpfulCountA}
// </div>
// <button type="button" text='Report Answer' onClick={() => {handleAnswerReport(answer.answer_id)}}> Report Question</button>
// <div>
// <button type="button" name="loadAnswers" text="Load more answers" onClick={addMoreAnswers}> Load More Answers </button>
// </div>
// </div>