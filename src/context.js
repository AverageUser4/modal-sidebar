import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  function toggleSidebar() {
    setIsSidebarOpen(prev => !prev);
  }

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  function toggleModal() {
    setIsModalOpen(prev => !prev);
  }

  return (
    <MyContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        toggleSidebar,
        toggleModal
      }}
    >

      {children}

    </MyContext.Provider>
  );
}

// custom hook
function useMyContext() {
  return useContext(MyContext);
}

export { 
  MyContext,
  MyProvider,
  useMyContext 
};