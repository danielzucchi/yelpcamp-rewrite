import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
  <div className="nav">
    <ul className="nav__links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/campgrounds">Campgrounds</NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
