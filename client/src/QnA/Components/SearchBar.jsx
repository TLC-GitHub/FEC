import React, { useState } from 'react';


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
      />
      </form>
    </div>
  )
}

export default SearchBar;