import React from 'react';
import CategoryListContainer from './containers/CategoryListContainer';
import LingoFromContainer from './containers/LingoFromContainer';
import SearchFormContainer from './containers/SearchFormContainer';

const MyPage = () => {
  return (
    <div>
      My page
      <LingoFromContainer />
      <SearchFormContainer />
      <CategoryListContainer />
    </div>
  );
};

export default MyPage;
