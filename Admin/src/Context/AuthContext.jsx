import React, { createContext } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl = "https://shop-here-euz7.onrender.com";
  return (
    <div>
      <authDataContext.Provider value={{ serverUrl }}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
