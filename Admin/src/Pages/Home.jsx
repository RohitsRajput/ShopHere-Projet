import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <div className="w-screen h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white relative pt-[70px]">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Home;
