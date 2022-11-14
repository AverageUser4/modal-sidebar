import React from 'react';

import { FaTimes } from 'react-icons/fa';

export default function Modal() {
  return (
    <div className="modal">

      <div className="modal-content">

        <h1 className="modal__heading">Modal Content</h1>

        <button 
          className="modal__close-button close-button"
        >
          <FaTimes/>
        </button>

      </div>

    </div>
  );
}