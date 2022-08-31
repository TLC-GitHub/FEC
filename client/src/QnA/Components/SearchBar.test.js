import React from 'react';
import SearchBar from './SearchBar.jsx';
import {render, fireEvent} from '@testing-library/react';



it.only('should alter the text of the form', () => {

  const {queryByPlaceholderText} = render(<SearchBar/>)

  const searchInput = queryByPlaceholderText('Need answers? Search here')

  fireEvent.change(searchInput, { target: { value: 'te' } })

  expect(searchInput.value).toBe('test')
})