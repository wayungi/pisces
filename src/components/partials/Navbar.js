import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';
import logo from '../../images/logo.png';

const Navbar = () => (
  <nav>
    <ul>
      <li><GiHamburgerMenu /></li>
      <li><img src={logo} alt="fish logo" /></li>
      <li>
        <form>
          <input type="text" />
          <CiSearch />
        </form>
      </li>
      <li>Home</li>
    </ul>
  </nav>
);

export default Navbar;
