import React from 'react';

const SearchForm = ({ setInput }) => {

  return (
    <div>
      <input
        name='keyword'
        placeholder='ex) #개발 검색...'
        onChange={setInput}
      />
    </div>
  );
}

export default SearchForm;