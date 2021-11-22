import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { BsMicFill } from 'react-icons/bs';

const Nav = () => (
  <div>
    <nav className='nav row isBlue'>
      <div className='d-flex justify-content-between mt-3'>
        <div>
          <NavLink to='/' >
            <h1 className='c-white'><ArrowLeft /></h1>
          </NavLink>
        </div>
        <div>
          <h5 className='c-white'>Covid Tracker</h5>
        </div>
        <div className=" c-white">
        <h4><BsMicFill /></h4>
        </div>
      </div>
    </nav>
  </div>
);
export default Nav;
