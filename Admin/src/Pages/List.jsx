import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";

function List() {
  const [list, setList] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(`${serverUrl}/list`);
      setList(result.data);
      console.log("list", result.data);
    } catch (error) {
      console.log("list error for frontend", error);
    }
  };
  const removeList = async (id) => {
    try {
      const result = await axios.delete(
        `${serverUrl}/remove/${id}`,
        { withCredentials: true }
      );

      if (result.data) {
        fetchList();
      } else {
        console.log("Failed to remove Product ");
      }
    } catch (error) {
      console.log("remove list error", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className=" w-screen min-h-screen bg-linear-to-br from-slate-900 to-slate-800 text-white">
      <Navbar />
      <div className=" w-full h-full flex item-center justify-start">
        <Sidebar />
        <div className="w-[80%] h-full lg:ml-65  md:ml-[230px] mt-[50px] mb-5 flex flex-col gap-[30px] overflow-x-hidden ml-10 py-[50px]">
          <div className=" w-[400px] h-10 text-[28px] md:text-[40px] mb-5 text-white  ">
            All Listed Product
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {list.length > 0 ? (
              list.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-700 rounded-2xl p-4 flex flex-col items-center shadow-lg  border-3 border-transparent hover:border-cyan-500 transition-all duration-200"
                >
                  <img
                    src={item.image1}
                    alt="product img"
                    className="w-full h-[180px] object-cover rounded-xl"
                  />

                  <div className="mt-3 w-full flex flex-col">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-[#ffffffb7] text-sm">{item.category}</p>
                    <p className="text-[18px] font-bold mt-1">₹ {item.price}</p>
                  </div>

                  <div className="w-full flex justify-end ">
                    <AiOutlineDelete
                      onClick={() => removeList(item._id)}
                      className="text-red-400 text-xl cursor-pointer hover:text-red-500"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-lg">No Product Available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
