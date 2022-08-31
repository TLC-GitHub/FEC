import React from 'react';
import SearchBar, {handleChange} from './SearchBar.jsx';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

it('should exist in the document', () => {
  render(<SearchBar searchInputValue="testing"/>);

  const searchInput = screen.getByPlaceholderText("Have a question? Search for answers")

  expect(searchInput).toBeInTheDocument();
})