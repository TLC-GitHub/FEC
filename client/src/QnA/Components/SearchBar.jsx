import React, { useState } from 'react';
import helper from '../../../.././server/hrapi.js';


function SearchBar({setQuestions, handleSearch}) {
  let [query, setQuery] = useState('');


  let componentDidMount = () => {
    handleSearch();
  }


  let handleChange = (event) => {
    setQuery(event.target.value)
  }

  let searchFilter = (query) => {
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

  let twoCalls = (e) => {
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
      />
      </form>
    </div>
  )
}

export default SearchBar;