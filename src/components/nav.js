import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { BsMicFill } from 'react-icons/bs';

const Nav = () => (
  <div>
    <nav className='nav row isBlue'>
      <div className='col-4 pt-3'>
        <NavLink to='/' >
          <h1 className='p-1 c-white'><ArrowLeft /></h1>
        </NavLink>
      </div>
      <div className="icons c-white">
      <h4><BsMicFill /></h4>
      </div>
    </nav>
  </div>
);
export default Nav;
