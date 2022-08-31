import React from 'react';
import SearchBar, {handleChange} from './SearchBar.jsx';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'


it("should filter search results by query", () => {
  const handleSearch = jest.fn();

  render(<SearchBar searchInputValue="testing"/>);

  const searchInput = screen.getByPlaceholderText("Have a question? Search for answers")


  expect(searchInput).toBeInTheDocument();
})