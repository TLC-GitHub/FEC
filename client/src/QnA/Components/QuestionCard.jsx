import React, {useState} from 'react';
import Answers from '/Answers.jsx';

function QuestionCard ({question, setCount}) {

//Question        helpful button
// (newlines) Answer        helpful button / report button
//answerer username (creation date) || username === seller (BOLD)

let [answerCount, setAnswerCount] = useState(2);

  return (
    <div>
        <h1> Q: Question.body </h1>
        <button> On Click Add Helpfulness Put Request</button>
        <button> Report Button Put Request </button>
        <div>
          {for (var i = 0; i < answerCount; i++) => {
            <Answers setCount={setAnswerCount} answers={question.answers} />
          }}
        </div>
    </div>
  )
}

export default QuestionCard