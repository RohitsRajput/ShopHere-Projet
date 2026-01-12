import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { authDataContext } from "./authContext"; // adjust path if needed

export const userDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/user/current-user`,
        {},
        { withCredentials: true }
      );

      setUserData(response.data);
      console.log("Current user data:", response.data);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    userData,
    setUserData,
    getCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
