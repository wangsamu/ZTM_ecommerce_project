import { createContext, useState } from "react";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

});

export const userProvider = (({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  return (<UserContext.Provider value={}>
    {children}
  </UserContext.Provider>)
})