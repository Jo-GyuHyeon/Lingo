import React from 'react';
import Link from './Link';
// import PropTypes from 'prop-types';


const LinkList = ({ links }) => {

  const LinkList = links.map(
    link => {
      //console.log(link);
      return (
        <Link
          key={link.get('id')}
          title={link.get('title')}
          category={link.get('category')}
          url={link.get('url')}
          hashTag={link.get('hashTag')}
        />
      )
    }
  );
  

  return (
    <div>
      {LinkList}
    </div>
  );
};

// LinkList.propTypes = {

// }
// LinkList.defaultProps = {

// }

export default LinkList;