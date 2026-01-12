import React, { createContext, useState, useContext, useEffect } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const adminDataContext = createContext();

function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);
  const { serverUrl } = useContext(authDataContext);

  const getAdminUser = async () => {
    try {
      let response = await axios.post(
        `${serverUrl}/api/user/getadmin`,
        {},
        {
          withCredentials: true,
        }
      );
      setAdminData(response.data);
      console.log("Admin data fetched:", response.data);
    } catch (error) {
      setAdminData(null);
      console.error("Error fetching admin data:", error);
    }
  };

  useEffect(() => {
    getAdminUser();
  }, []);

  const value = {
    adminData,
    setAdminData,
    getAdminUser,
  };

  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
}

export default AdminContext;
