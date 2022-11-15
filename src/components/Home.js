import React from 'react';

import { FaBars } from 'react-icons/fa';

import { useMyContext } from '../context.js';

export default function Home() {
  const { isModalOpen, toggleSidebar, toggleModal } = useMyContext();

  return (
    <div className="home">

      <button
        className="home__sidebar-button"
        onClick={toggleSidebar}
      >
        <FaBars/>
      </button>

      <button
        className="home__modal-button"
        onClick={toggleModal}
      >
        {isModalOpen ? 'Hide Modal' : 'Show Modal'}
      </button>

    </div>
  );
}