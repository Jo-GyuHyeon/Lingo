import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types';

const Category = ({ id, category, image, onRemove, location }) => {
  const linkUrl = `/category/${category}`;
  const {pathname} = location;

  const handelRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <Link to={linkUrl}>
        <img src={image} alt='' width='80px' height='80px' />
        <span>{category}</span>
      </Link>
      {pathname === '/myPage' && <button onClick={handelRemove}>제거</button>}
    </div>
  );
};

// Category.propTypes = {

// };

// Category.defaultProps = {

// };

export default withRouter(Category);