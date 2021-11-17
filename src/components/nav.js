import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="panel-bg container">
    <nav className="nav row">
      <div className="col-8 row">
        {/* <img src={planet} alt="planet-logo" className="planet-logo col-4" /> */}
        <h1 className="title  col-8">Covid Tracker</h1>
      </div>
      <div className="col-4 pt-3">
        <NavLink to="/" >
          <span className="p-1">tracker</span>
        </NavLink>
        <NavLink to="/Details">
          <span className="p-1">details</span>
        </NavLink>
      </div>
    </nav>
  </div>
);

export default Nav;
