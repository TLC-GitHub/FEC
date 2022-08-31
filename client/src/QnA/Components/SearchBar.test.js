import React from 'react';
import SearchBar, {handleChange} from './SearchBar.jsx';
import {render, fireEvent} from '@testing-library/react';



it("should filter search results by query", () => {
  const handleSearch = jest.fn();

  render(<SearchBar searchInputValue="testing"/>);

  const searchInput = fireEvent.change(input, {target: {value: 'testing'}});


  expect(searchInput).toBe('testing');
})