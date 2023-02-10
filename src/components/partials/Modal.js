import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';

const Modal = ({ modal }) => (
  <section className="flex flex-col p-3 text-white justify-start bg-gray-700 absolute min-h-screen w-full opacity-90 ">
    <div className="py-7">
      <AiOutlineClose className="text-3xl cursor-pointer" onClick={modal} />
    </div>
    <NavLink to="/" element={<HomePage />} className="text-2xl">Home</NavLink>
  </section>
);

Modal.propTypes = {
  modal: PropTypes.func.isRequired,
};

export default Modal;
