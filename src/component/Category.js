import React from 'react';
// import PropTypes from 'prop-types';

const Category = ({category,image}) => {
  return (
    <div>
      <img src={image} width="80px" height="80px"/>
      <span>{category}</span>
    </div>
  );
};

// Category.propTypes = {

// };

// Category.defaultProps = {

// };

export default Category;