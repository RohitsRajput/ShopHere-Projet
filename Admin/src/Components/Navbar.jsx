import React from "react";
import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
  let { getAdminUser } = useContext(authDataContext);

  const logout = async () => {
    try {
      const response = await axios.get(`${serverUrl}/logout`, {
        withCredentials: true,
      });
      console.log("Logout successful:", response.data);

      // ✅ Wait for context reset
      getAdminUser();

      // ✅ Then navigate
      navigate("/login");
    } catch (error) {
      console.log("Logout error:", error);
      navigate("/login"); // ✅ Ensure navigation even if context fails
    }
  };

  return (
    <nav className="bg-linear-to-r from-blue-100 to-blue-200 shadow-md w-full fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 flex items-center gap-1"
          >
            <FaShopify />
            ShopHere
          </Link>

          <button
            className="text-[15px] hover:border-2 border-[#89daea] cursor-pointer bg-[#000000ca] py-2.5 px-5 rounded-2xl text-white"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
