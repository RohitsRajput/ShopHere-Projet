import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      {/* Desktop / Tablet VIEW — LEFT SIDEBAR */}
      <div className="hidden md:flex flex-col fixed items-center top-0 left-0 h-full w-40 bg-slate-800 backdrop-blur-md border-r border-slate-800 py-[60px] z-40">
        <div className="flex flex-col gap-4 pt-8 text-[15px]">
          <Link
            to="/add"
            className="flex items-center justify-center gap-3 bg-slate-700/50 hover:bg-[#2c7b89] px-3 py-2 rounded-3xl cursor-pointer"
          >
            <CiSquarePlus className="w-5 h-5" />
            <p className="hidden md:block text">Add items</p>
          </Link>

          <Link
            to="/list"
            className="flex items-center justify-center gap-3 bg-slate-700/50 hover:bg-[#2c7b89] px-3 py-2 rounded-3xl cursor-pointer"
          >
            <CiCircleList className="w-5 h-5" />
            <p className="hidden md:block">List items</p>
          </Link>

          <Link
            to="/order"
            className="flex items-center justify-center gap-3 bg-slate-700/50 hover:bg-[#2c7b89] px-3 py-2 rounded-3xl cursor-pointer"
          >
            <SiTicktick className="w-4 h-4" />
            <p className="hidden md:block">View Order</p>
          </Link>
        </div>
      </div>

      {/* MOBILE VIEW — BOTTOM NAVBAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-700 py-2 z-50 flex justify-around">
        <Link
          to="/add"
          className="flex flex-col items-center text-white hover:text-cyan-300"
        >
          <CiSquarePlus className="w-6 h-6" />
          <p className="text-[12px]">Add</p>
        </Link>

        <Link
          to="/list"
          className="flex flex-col items-center text-white hover:text-cyan-300"
        >
          <CiCircleList className="w-6 h-6" />
          <p className="text-[12px]">List</p>
        </Link>

        <Link
          to="/order"
          className="flex flex-col items-center text-white hover:text-cyan-300"
        >
          <SiTicktick className="w-5 h-5" />
          <p className="text-[12px]">Orders</p>
        </Link>
      </div>
    </>
  );
}
