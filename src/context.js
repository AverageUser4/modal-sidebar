import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyProvider({ children }) {
  return (
    <MyContext.Provider
      value={['piesek', 'kotek']}
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