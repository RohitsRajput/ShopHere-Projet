import React, { useState, useContext } from "react";
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";

function Registration() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverUrl}/signup`,
        { name, email, password },
        { withCredentials: true },
      );

      console.log("User registered:", res.data);
      getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <div className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/color/96/000000/add-user-group-man-man.png"
            alt="Register"
            className="mb-2 size-8"
          />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="text-gray-500">Sign up to get started!</p>
        </div>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-3xl"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-3xl"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-3xl pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FaRegEyeSlash /> : <GoEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white rounded-xl bg-gradient-to-r from-purple-500 to-blue-500"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Registration;
