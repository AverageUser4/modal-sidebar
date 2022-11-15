import React from 'react';

import { FaTimes } from 'react-icons/fa';

import { useMyContext } from '../context.js';

export default function Modal() {
  const { isModalOpen, toggleModal } = useMyContext();

  return (
    <div className={'modal' + (isModalOpen ? ' modal--visible' : '')}>

      <div className="modal-content">

        <h1 className="modal__heading">Modal Content</h1>

        <button 
          className="modal__close-button close-button"
          onClick={toggleModal}
        >
          <FaTimes/>
        </button>

      </div>

    </div>
  );
}