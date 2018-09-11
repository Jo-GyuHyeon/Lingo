import React from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

const Category = ({ category, image }) => {
  const linkUrl = `/category/${category}`;
  return (
    <div>
      <Link to={linkUrl}>
        <img src={image} alt='description' width='80px' height='80px' />
        <span>{category}</span>
      </Link>
    </div>
  );
};

// Category.propTypes = {

// };

// Category.defaultProps = {

// };

export default Category;