import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

function AnswerModule({questionID}) {
  //should sort the incoming answers according to seller > helpfulness > rest

  const [answerCount, setAnswerCount] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [helpfulCountA, setHelpfulCountA] = useState()

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
    <div className="answer-parent">
      <div className="answer-list">
      <div className="answer">
        {answers.length < 1
        ? <div> </div>
        : <div> <b>A:</b> </div>
        }
      {answers.slice(0, answerCount).map(answer => {
        return <Answer answer={answer} key={answer.answer_id}/>
      })}
      </div>
      </div>

      <div className="answer-buttons">
        {answers.length <= 2
        ? <div></div>
        : answerCount < answers.length
          ? <button className="button" type="button" name="loadAnswers" text="Load more answers"
          onClick={addMoreAnswers}> <b>Load More Answers</b></button>
          : <button className="button" type="button" name="collapse" text="Hide Answers"
          onClick={resetAnswers}> Hide Answers </button>
        }
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