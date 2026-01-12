import React, { useState } from "react";
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { authDataContext } from "../context/authContext.jsx";
import axios from "axios";
import { userDataContext } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getCurrentUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/login`, // Adjust the endpoint as needed
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log("login successful:", response.data);
      getCurrentUser(); // Fetch and update user data after successful login
      navigate("/"); // Redirect to home or desired page after login
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 cursor-pointer">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
          Login to ShopHere
        </h2>
        <form onSubmit={handlelogin} className="space-y-6">
          <div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <FaRegEyeSlash /> : <GoEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Login
          </button>
          <div className="text-center mt-6">
            <span className="text-gray-600">
              Don't have an account?{"  "}
              <a href="/signup" className="text-purple-600  font-semibold ">
                SignUp
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
