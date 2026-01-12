import React, { useState, useContext } from "react";
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { adminDataContext } from "../Context/adminContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext);
  const { getAdminUser, adminData } = useContext(adminDataContext);

  const navigate = useNavigate();

  const adminlogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/admin-login`, // Adjust the endpoint as needed
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("login successful:", response.data);
      getAdminUser();
      navigate("/");
    } catch (error) {
      console.error("Admin login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-center  gap-3 mb-6">
          <div className="text-center">
            <h1 className="text-white text-3xl font-semibold">Login Page</h1>
            <p className="text-slate-300 text-sm font-semibold mt-1">
              Admin Panel
            </p>
          </div>
        </div>

        <form onSubmit={adminlogin} className="space-y-4">
          <div>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/6 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your admin email"
            />
          </div>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/6 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-500 hover:text-blue-400 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <FaRegEyeSlash /> : <GoEye />}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-md disabled:opacity-60"
            >
              login
            </button>
          </div>
        </form>

        <div className="my-4">
          <div className="h-px bg-white/6 rounded" />
        </div>
      </div>
    </div>
  );
}
