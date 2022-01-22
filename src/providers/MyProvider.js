import React, { createContext } from "react";

const MyContext = createContext(null);

export default function MyProvider({ children }) {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}
