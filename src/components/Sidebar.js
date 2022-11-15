import React from 'react';

import { FaTimes } from 'react-icons/fa';

import logoImage from '../resources/logo.svg';
import { links, social } from '../resources/data.js';

import { useMyContext } from '../context.js';

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useMyContext();

  return (
    <nav className={'sidebar' + (isSidebarOpen ? ' sidebar--visible' : '')}>

      <div className="sidebar__top">

        <img 
          className="sidebar__logo"
          src={logoImage}
        />

        <button 
          className="close-button"
          onClick={toggleSidebar}
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