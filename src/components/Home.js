import React from 'react';

import { FaBars } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="home">

      <button
        className="home__sidebar-button"
      >
        <FaBars/>
      </button>

      <button
        className="home__modal-button"
      >
        Show Modal
      </button>

    </div>
  );
}