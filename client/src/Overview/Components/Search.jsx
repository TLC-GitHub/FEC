import React, {useState} from 'react';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
      <form>
        <label>Search Products</label>
        <input type="text" name="product-search" onChange={handleChange}/>
      </form>

  );
}

export default Search;