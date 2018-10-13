import React from 'react';
import LinkListContainer from './containers/LinkListContainer';

const CategoryPage = ({ match }) => {
  const category = match.params.category;
  return (
    <div>
      Category page = {category}
      <LinkListContainer category={category} />
    </div>
  );
};

export default CategoryPage;
