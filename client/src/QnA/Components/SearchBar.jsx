import React, { useState, useEffect } from 'react';


function SearchBar({setQuestions, handleSearch}) {
  const [query, setQuery] = useState('');


  const componentDidMount = () => {
    handleSearch();
  }


  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const searchFilter = (query) => {
    //on keystroke < 3, should start to filter out responses
    //filter our get requests for possible questions
    handleSearch(query)
      .then((questions) => {
        if (query.length >= 3) {
        //filter through the array of objects and only keep objects that include query
          setQuestions(questions.filter(question => question.contains(query)))
        } else {
          setQuestions(questions);
      }
    })
  }

  const twoCalls = (e) => {
    handleChange(e)
    .then((query) => {
      searchFilter(query);
    })
  }
  //onchange should

  return (
    <div>
      <form onSubmit={searchFilter} >
      <input
        type="text"
        placeholder="Need answers? Search here"
        value={query}
        onChange={twoCalls}

function SearchBar({setQuestions, questions, prevQuestions}) {
  // const [query, setQuery] = useState('');

  let val;

  const handleChange = (e) => {
    val = e.target.value;
    console.log(val);
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