import React from 'react';
// import PropTypes from 'prop-types';

const Link = ({title,category,url,hash_tag}) => {
  const linkStyle={
    border: '1px solid'
  }
  return (
    <div style={linkStyle}>
      <p>{title}</p>
      <p>{category}</p>
      <a href={url} target='_blank'>{url}</a>
      <p>{hash_tag}</p>
    </div>
  );
};

// Link.propTypes = {

// };

// Link.defaultProps = {

// };

export default Link;