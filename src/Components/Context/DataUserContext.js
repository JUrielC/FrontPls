import React, { createContext } from 'react';
const DataUserContext = createContext();

const DataUserContextProvider = ({ children, data }) => {
  return
  (<DataUserContext.Provider value={data}>
    {children}
  </DataUserContext.Provider>
  )
}

export default DataUserContextProvider;

