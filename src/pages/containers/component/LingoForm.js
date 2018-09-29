import React from 'react';

const LingoForm = ({ setInput, onInsert }) => {

  return (
    <div>
      <input
        name='category'
        placeholder='category'
        onChange={setInput}
      />
      <input
        name='hash_tag'
        placeholder='hash_tag'
        onChange={setInput}
      />
      <input
        name='title'
        placeholder='title'
        onChange={setInput}
      />
      <input
        name='url'
        placeholder='link'
        onChange={setInput}
      />
      <input
        name='image'
        placeholder='image url'
        onChange={setInput}
      />
      <input type='button' onClick={onInsert} value='추가' />
    </div>
  );
}

export default LingoForm;

