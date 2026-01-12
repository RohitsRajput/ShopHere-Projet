import { userDataContext } from "../context/userContext.jsx";
import React, { useState } from "react";
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { authDataContext } from "../context/authContext.jsx";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getCurrentUser } = useContext(userDataContext);

  const handleSignUp = async (e) => {
    try {
      const res = await axios.post(
        `${serverUrl}/signup`,
        { name, email, password },
        { withCredentials: true } // because you set cookies in backend
      );
      console.log("User registered:", res.data);
      getCurrentUser(); // Fetch and update user data after successful signup
      Navigate("/login"); // Redirect to home or desired page after signup
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 cursor-pointer">
        <div className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/color/96/000000/add-user-group-man-man.png"
            alt="Register"
            className="mb-2 size-8"
          />
          <span className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Create your account
          </span>
          <p className="text-gray-500">Sign up to get started!</p>
        </div>
        <form className="mt-5 space-y-4" onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none cursor-pointer rounded-3xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-900"
              placeholder="User Name"
            />
          </div>
          <div className="mb-4">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none cursor-pointer rounded-3xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-900"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none cursor-pointer rounded-3xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-900 pr-12"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 top-0 flex items-center px-3 text-gray-500 focus:outline-none cursor-pointer"
            >
              {showPassword ? <FaRegEyeSlash /> : <GoEye />}
            </button>
          </div>

          <button
            type="submit"
            className="group cursor-pointer relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 shadow-lg transition-all duration-200"
          >
            SignUp
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="text-center mt-6">
          <span className="text-gray-600">
            Already have an account?{"  "}
            <a href="/login" className="text-purple-600  font-semibold ">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registration;
