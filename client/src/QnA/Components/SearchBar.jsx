import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {SearchbarInput, SearchBarContainer} from './styles.jsx';


function SearchBar({setQuestions, questions, prevQuestions}) {
  // const [query, setQuery] = useState('');

  useEffect(() => {

  }, [questions])


  let val;
//need to filter constantly on keystrokes as long as val is greater than 3
//at the moment filters from select list and will only use that select list instead of getting all questions once again
  const handleChange = (e) => {
    val = e.target.value;
      if (val.length >= 3) {
        setQuestions(questions.filter(question => question.question_body.includes(val)))
      } else {
        setQuestions(prevQuestions);
      }
  }

  return (
    <SearchBarContainer>
      <SearchbarInput
        type="text"
        placeholder="Have a question? Search for answers..."
        value={val}
        onChange={handleChange}
      />
    </SearchBarContainer>
  )
}

export default SearchBar;