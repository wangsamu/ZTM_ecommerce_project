import { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const ProductContext = createContext({
  currentContext: null,
  setCurrentContext: () => null,
});

export const ProductProvider = ({ children }) => {
  const [currentContext, setCurrentContext] = useState(null);
  const value = { currentContext, setCurrentContext };

  useEffect(() => {}, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
