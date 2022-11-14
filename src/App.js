import React from 'react';

import { MyProvider } from './context.js';

import Home from './components/Home.js';
import Modal from './components/Modal.js';
import Sidebar from './components/Sidebar.js';

export default function App() {
  return (
    <MyProvider>

      <Home/>
      <Modal/>
      <Sidebar/>

    </MyProvider>
  );
}