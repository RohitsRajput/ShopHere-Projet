import React, { useContext, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiSearch2Fill } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { userDataContext } from "../context/userContext";
import { authDataContext } from "../context/authContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { shopDataContext } from "../context/ShopContext.jsx";

function Navbar() {
  const { getCurrentUser, userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);

  const { showSearch, setShowSearch, search, setSearch, getCartCount } =
    useContext(shopDataContext);
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/logout`, { withCredentials: true });
      setUserData(null);
      navigate("/");
    } catch (err) {
      console.log("Logout error", err);
    }
  };  

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-blue-200 shadow-md w-full fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between p-2">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center gap-1"
        >
          <FaShopify /> ShopHere
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl px-6 py-2 shadow-md ">
          <li className="hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200 px-3 py-1 rounded-xl">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200 px-3 py-1 rounded-xl">
            <Link to="/collection">Collection</Link>
          </li>

          <li className="hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200 px-3 py-1 rounded-xl">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200 px-3 py-1 rounded-xl">
            <Link to="/contect">Contact</Link>
          </li>
        </ul>

        {/* Icons */}

        <div className="flex items-center gap-5">
          {/* Search */}

          {!showSearch && (
            <FiSearch
              onClick={() => {
                setShowSearch((prev) => !prev);
                navigate("/collection");
              }}
              className="w-[23px] h-[23px] cursor-pointer"
            />
          )}

          {showSearch && (
            <RiSearch2Fill
              onClick={() => {
                setShowSearch((prev) => !prev);
              }}
              className="w-[23px] h-[23px] cursor-pointer"
            />
          )}

          {/* Profile */}
          {userData ? (
            <div
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
            >
              {userData.name?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <RiAccountPinCircleFill
              className="cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
            />
          )}

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaOpencart className="w-[23px] h-[23px]" />
            <p className="absolute w-[20px] h-[20px] flex items-center justify-center bg-black text-white rounded-full text-[10px] bottom-[10px] -right-[10px]">
              {getCartCount()}
            </p>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="absolute w-full h-[60px] mt-1 flex justify-center ">
          <input
            type="text"
            className="w-[90%] md:w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[16px]"
            placeholder="Search for products, brands and more"
            autoFocus
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute right-4 top-17 bg-black text-white w-32 rounded-lg p-3">
          <ul className="flex flex-col gap-3 text-center">
            {!userData ? (
              <li>
                <Link to="/login" onClick={() => setShowProfile(false)}>
                  Login
                </Link>
              </li>
            ) : (
              <li onClick={handleLogout}>Logout</li>
            )}
            <li>
              <Link to="/order" onClick={() => setShowProfile(false)}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowProfile(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full shadow-md p-4">
          <ul className="flex flex-col gap-4 font-medium text-center">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/collection" onClick={() => setMenuOpen(false)}>
                Collection
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contect" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            {userData ? (
              <li
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
