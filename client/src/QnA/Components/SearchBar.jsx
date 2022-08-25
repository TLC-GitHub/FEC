import React, { useState } from 'react';

function SearchBar() {
  let [query, setQuery] = useState('');


  let handleChange = (event) => {
    setQuery(event.target.value)
  }

  let handleSearch = (query) => {
    //get request to the API for data
  }


  let keyStrokesFilter = (query) => {
    //on keystroke < 3, should start to filter out responses
    if (query.length >= 3) {
      //filter our get requests for possible questions
      handleSearch(query)
    }
  }

  let twoCalls = (e) => {
    handleChange(e)
    .then((query) => {
      keyStokesFilter(query);
    })
  }
  //onchange should

  return (
    <div>
      <form onSubmit={handleSearch} >
      <input
        type="text"
        value={query}
        onChange={twoCalls}
      />
      </form>

    </div>
  )
}

export default searchBar;