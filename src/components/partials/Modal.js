import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import HomePage from '../pages/HomePage';

const Modal = () => (
  <section className="flex flex-col p-3 text-white justify-start bg-gray-700 absolute min-h-screen w-full opacity-90 ">
    <div className="py-7">
      <AiOutlineClose className="text-3xl cursor-pointer"/>
    </div>
    <NavLink to="/" element={<HomePage />} className="text-2xl">Home</NavLink>
  </section>
);

export default Modal;
