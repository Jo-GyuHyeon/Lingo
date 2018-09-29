import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    const { setInput } = this.props;
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
}

export default SearchForm;

