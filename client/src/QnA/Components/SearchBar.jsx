import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {SearchbarInput} from './styles.jsx';

function SearchBar({setQuestions, questions, prevQuestions}) {
  // const [query, setQuery] = useState('');

  let val;

  const handleChange = (e) => {
    val = e.target.value;
      if (val.length >= 3) {
        setQuestions(questions.filter(question => question.question_body.includes(val)))
      } else {
        setQuestions(prevQuestions);
      }
  }

  return (
    <div className="search-bar-container">
      <form className="search-bar">
      <SearchbarInput
        type="text"
        placeholder="Have a question? Search for answers"
        value={val}
        onChange={handleChange}
      />
      </form>
    </div>
  )
}

export default SearchBar;