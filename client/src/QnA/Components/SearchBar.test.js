import React from 'react';
import SearchBar from './SearchBar.jsx';
import {render, fireEvent} from '@testing-library/react';

const handleSearch = (query) => {
  //product ID is queryParams
  return helper.getInfo('qa/questions', {product_id: 5})
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

it('should alter the text of the form', () => {
  const setSearch = jest.fn((value) => {})

  const {queryByPlaceholderText} = render(<SearchBar handleSearch={searchFilter}/>)

  const searchInput = queryByPlaceholderText('Search...')

  fireEvent.change(searchInput, { target: { value: 'test' } })

  expect(searchInput.value).toBe('test')
})