import React, { useState, useEffect } from 'react';


function SearchBar({setQuestions, questions, prevQuestions}) {
  // const [query, setQuery] = useState('');

  let val;

  const handleChange = (e) => {
    val = e.target.value;
    console.log(val);
    // setQuery(event.target.value)
    // console.log(query, 'query');
      if (val.length >= 3) {
        setQuestions(questions.filter(question => question.question_body.includes(val)))
      } else {
        setQuestions(prevQuestions);
      }
  }

  return (
    <div>
      <form>
      <input
        type="text"
        placeholder="Need answers? Search here"
        value={val}
        onChange={handleChange}
      />
      </form>
    </div>
  )
}

export default SearchBar;