import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const active_style = {
    color: 'green',
    fontSize: '2rem'
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={active_style}>
            Lingo
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/myPage" activeStyle={active_style}>
            MyPage
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/submit" activeStyle={active_style}>
            Submit
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={active_style}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
