import React from 'react';
// import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = ({ categories, onRemove }) => {
  const categoryList = categories.map(category => {
    return (
      <Category
        key={category.get('id')}
        id={category.get('id')}
        category={category.get('category')}
        image={category.get('image')}
        onRemove={id => onRemove(id)}
      />
    );
  });

  return <div>{categoryList}</div>;
};

// CategoryList.propTypes = {

// }
// CategoryList.defaultProps = {

// }

export default CategoryList;
