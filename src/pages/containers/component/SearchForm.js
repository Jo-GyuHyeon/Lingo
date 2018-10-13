import React from 'react';

const SearchForm = ({ setInput }) => {
  return (
    <div>
      <input
        name="keyword"
        placeholder="ex) #개발 검색..."
        onChange={e => setInput(e)}
      />
    </div>
  );
};

export default SearchForm;
