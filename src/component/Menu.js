import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  const activeStyle={
    color:'green',
    fontSize:'2rem'
  }
  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Lingo</NavLink></li>
        <li><NavLink exact to="/subscribe" activeStyle={activeStyle}>Subscribe</NavLink></li>
        <li><NavLink exact to="/submit" activeStyle={activeStyle}>Submit</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;