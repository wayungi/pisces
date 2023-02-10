import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';
import logo from '../../images/logo.png';
import Modal from './Modal';

const Navbar = () => {
  const [showModalWindow, setModalWindow] = useState(false);

  const toggleModal = () => {
    setModalWindow((prevState) => !prevState);
  };

  return (
    <nav>
      {showModalWindow && <Modal />}
      <ul className="flex flex-row items-center">
        <li className="mx-3 cursor-pointer"><GiHamburgerMenu onClick={toggleModal} /></li>
        <li className="grow">
          <form className="flex flex-row border-solid border-2 border-gray-400 rounded-sm items-center pr-1">
            <input type="text" className="py-2 px-2 h-6 box-border focus:outline-none grow" />
            <CiSearch className="" />
          </form>
        </li>
        <li><img src={logo} alt="fish logo" className="h-10 px-1 mr-1" /></li>
        <li className="hidden">Home</li>
      </ul>
    </nav>
  );
};

export default Navbar;
