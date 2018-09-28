import React from 'react';
import CategoryListContainer from './containers/CategoryListContainer';
import LingoFromContainer from './containers/LingoFromContainer'

const MyPage = () => {
  return (
    <div>
      My page
      <LingoFromContainer />
      <CategoryListContainer />
    </div>
  );
};

export default MyPage;