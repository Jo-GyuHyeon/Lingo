import React from 'react';

const LingoForm = ({ setInput, onInsert }) => {
  return (
    <div>
      <input
        name="category"
        placeholder="category"
        onChange={e => setInput(e)}
      />
      <input name="hashtag" placeholder="hashtag" onChange={e => setInput(e)} />
      <input name="hashtag" placeholder="hashtag" onChange={e => setInput(e)} />
      <input name="title" placeholder="title" onChange={e => setInput(e)} />
      <input name="url" placeholder="link" onChange={e => setInput(e)} />
      <input name="image" placeholder="image url" onChange={e => setInput(e)} />
      <input type="button" onClick={() => onInsert()} value="추가" />
    </div>
  );
};

export default LingoForm;
