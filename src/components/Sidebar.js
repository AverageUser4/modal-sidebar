import React from 'react';

import { FaTimes } from 'react-icons/fa';

import logoImage from '../resources/logo.svg';
import { links, social } from '../resources/data.js';

export default function Sidebar() {
  return (
    <nav className="sidebar">

      <div className="sidebar__top">

        <img 
          className="sidebar__logo"
          src={logoImage}
        />

        <button 
          className="close-button"
        >
          <FaTimes/>
        </button>

      </div>

      <ul className="sidebar__links-list">

        {
          links.map(link =>
            <li key={link.id}>

              <a 
                href={link.url}
                className={'sidebar__link' + (location.pathname === link.url ? ' sidebar__link--current' : '')}
              >
                {link.icon}
                {link.text}
              </a>

            </li>
          )
        }

      </ul>

      <ul className="sidebar__social-list">

        {
          social.map(social =>
            <li key={social.id}>

              <a 
                href={social.url}
                className="sidebar__social-link"
              >
                {social.icon}
              </a>

            </li>
          )
        }

      </ul>

    </nav>
  );
}