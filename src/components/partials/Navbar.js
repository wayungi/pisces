import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><GiHamburgerMenu /></li>
        <li>
          <form>
            <input type="text" />
            <CiSearch />
          </form>
        </li>
        <li>Home</li>
      </ul>
    </nav>
  )
}

export default Navbar