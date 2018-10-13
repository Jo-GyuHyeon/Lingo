import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Category = ({ id, category, image, onRemove, location }) => {
  const link_url = `/category/${category}`;
  const { pathname } = location;

  const handelRemove = function() {
    onRemove(id);
  };

  return (
    <div>
      <Link to={link_url}>
        <img src={image} alt="" width="80px" height="80px" />
        <span>{category}</span>
      </Link>
      {pathname === '/myPage' && (
        <button onClick={() => handelRemove()}>제거</button>
      )}
    </div>
  );
};

// Category.propTypes = {

// };

// Category.defaultProps = {

// };

export default withRouter(Category);
