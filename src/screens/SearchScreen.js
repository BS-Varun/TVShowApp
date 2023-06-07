import React, { useState } from 'react';

const SearchScreen = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} type="button" class="btn btn-outline-info" style={{marginLeft: "30px"}}>  Search</button>
    </div>
  );
};

export default SearchScreen;
