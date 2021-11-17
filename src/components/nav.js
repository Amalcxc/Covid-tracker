import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="panel-bg container">
    <nav className="nav row">
      <div className="col-4 pt-3 ">
        <NavLink to="/" >
          <span className="p-1 text-start">tracker<i className="BiArrowBack"></i></span>
        </NavLink>
      </div>
    </nav>
  </div>
);
export default Nav;
